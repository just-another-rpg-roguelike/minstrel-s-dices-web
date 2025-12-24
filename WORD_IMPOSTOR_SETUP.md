# Word Impostor Game Setup Guide

## Overview
The Word Impostor Game is a social deduction game where:
- Players gather to play an interactive game
- One player is secretly assigned the role of "Impostor"
- All other players receive a secret word/character based on the selected theme
- Roles are revealed sequentially to each player
- Players then play to identify the impostor

## Features
- **Real-time Word Generation**: Utilizes OpenAI's GPT-4o Mini model to generate unique and relevant words/characters for each game.
- **Secure Role Assignment**: Each player's role (Impostor or Word) is generated and stored securely.
- **Interactive Gameplay**: Players can easily add and remove players, select themes, and start/end games.
- **Persistent Word History**: The AI avoids previously generated words to ensure unique options for each round.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Requirements

### OpenAI API Configuration
The game uses OpenAI's GPT-4o Mini model to generate words based on themes.

1. **Get an API Key:**
   - Visit [OpenAI API Keys](https://platform.openai.com/api-keys)
   - Create a new secret key
   - Copy the key

2. **Configure Environment:**
   - Create a `.env` file in the project root
   - Add the following line:
     ```
     OPENAI_API_KEY=your_api_key_here
     ```

3. **Verify Setup:**
   - Run the development server: `npm run dev` or `pnpm dev`
   - Navigate to the home page and click "Word Impostor Game"
   - Try creating a game with a theme to test the API connection

## Game Flow

### Phase 1: Player Registration
- Add players by entering their names
- Each player gets a unique random avatar
- Minimum 2 players required to start

### Phase 2: Theme Selection
- Enter a theme (e.g., "Harry Potter", "Marvel Universe", "Fruits", "Famous Actors")
- Click "Generate Word" to call the ChatGPT API
- The API generates a **SPECIFIC CHARACTER NAME or ENTITY** related to the theme
  - Examples: "Frodo" (Lord of the Rings), "Iron Man" (Marvel), "Banana" (Fruits)
- **Word History**: If you replay with the same theme, the AI will avoid previously generated words and suggest different characters/entities
- Each word is stored locally so you can play multiple rounds with unique options

### Phase 3: Role Reveal
- Players gather around the device
- Each player sees their role one at a time
- One random player sees "IMPOSTOR"
- All others see the secret word
- Each player confirms after seeing their role

### Phase 4: Ready
- All players have seen their roles
- Shows the theme being played
- Click "Start Game" to begin gameplay

### Phase 5: Game In Progress
- Displays all players and their roles
- (Note: Full gameplay mechanics can be extended)

## API Costs
- The GPT-4o Mini model is very affordable
- Each word generation uses minimal tokens (~5-10 tokens per request)
- See [OpenAI Pricing](https://openai.com/pricing) for current rates

## Troubleshooting

### "Failed to generate word" Error
- Check that `OPENAI_API_KEY` is set in `.env`
- Verify the API key is valid and has remaining credits
- Check that the theme input is not empty

### API Key Not Found
- Ensure `.env` file is in the project root directory
- Restart the development server after creating `.env`
- The server must be restarted for environment variables to load

### Word Generation is Slow
- This is normal - the first request to OpenAI may take 2-3 seconds
- Subsequent requests are typically faster

## Extending the Game

The game can be extended with:
- Full game chat/discussion phase
- Voting mechanism to identify the impostor
- Points/scoring system
- Multiple rounds
- Custom role options
- Difficulty levels

## File Structure

- `/src/pages/word-impostor-game.astro` - Main page
- `/src/components/WordImpostorGame.astro` - Game component
- `/src/pages/api/generate-word.ts` - ChatGPT API integration
