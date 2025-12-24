import type { APIRoute } from "astro";

interface RequestBody {
  theme: string;
  wordHistory?: string[];
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Validate the request
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
      });
    }

    const body: RequestBody = await request.json();
    const { theme, wordHistory } = body;

    if (!theme || typeof theme !== "string" || theme.trim().length === 0) {
      return new Response(
        JSON.stringify({
          error: "Theme is required and must be a non-empty string",
        }),
        { status: 400 }
      );
    }

    // Get the API key from environment variables
    const apiKey = import.meta.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error("OPENAI_API_KEY is not configured");
      return new Response(
        JSON.stringify({
          error: "API configuration error. Please contact the administrator.",
        }),
        { status: 500 }
      );
    }

    // Build the prompt with history
    let systemPrompt = `Eres un generador de palabras para un juego de deducción social.
Tu tarea es generar un NOMBRE DE PERSONAJE ESPECÍFICO o ENTIDAD del tema/película/media/categoría dado.
La palabra debe ser reconocible y específica - como nombres de personajes (ej: "Frodo", "Harry Potter"), lugares, entidades famosas, o items específicos.
Responde ÚNICAMENTE con la palabra/nombre, nada más. Sin artículos, sin explicaciones.
IMPORTANTE: Responde siempre en español latino.`;

    let userMessage = `Genera un nombre de personaje específico o entidad de este tema: ${theme}`;

    if (wordHistory && wordHistory.length > 0) {
      systemPrompt += `\n\nIMPORTANTE: NO generes ninguno de estos personajes/entidades previamente usados: ${wordHistory.join(
        ", "
      )}
Genera un personaje COMPLETAMENTE DIFERENTE del mismo tema.
Si el tema es una película/show/juego, elige un personaje de una escena o línea de historia diferente que los anteriores.
Asegúrate de la variedad - evita personajes similares o del mismo grupo.
Responde en español latino.`;
    }

    // Call OpenAI API with gpt-4o-mini model
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: userMessage,
          },
        ],
        temperature: 0.85,
        max_tokens: 30,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API error:", errorData);
      return new Response(
        JSON.stringify({
          error: "Failed to generate word from OpenAI API",
          details: errorData.error?.message || "Unknown error",
        }),
        { status: response.status }
      );
    }

    const data = await response.json();
    const word = data.choices[0]?.message?.content?.trim();

    if (!word) {
      return new Response(
        JSON.stringify({ error: "Failed to extract word from API response" }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ word }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in generate-word endpoint:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
};
