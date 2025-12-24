# Word Impostor Game - Features Summary

## 🎮 Core Features

### 1. **Player Management with localStorage**
- Add and remove players with unique avatars
- Players are automatically saved to browser's localStorage
- Persists across page refreshes and browser sessions
- Automatic cleanup when starting a new game

### 2. **Smart Character/Entity Generation**
- Generates **specific character names** or **entities** from themes (not just generic words)
- Examples:
  - Theme: "Harry Potter" → "Hermione Granger"
  - Theme: "Marvel" → "Black Widow"
  - Theme: "Fruits" → "Strawberry"
  - Theme: "Disney" → "Elsa"

### 3. **Word History & Uniqueness**
- Stores history of previously generated words in localStorage
- AI automatically avoids previously used words
- Ensures variety when replaying with the same theme
- Perfect for multiple rounds without repetition

### 4. **Secure Role Assignment**
- One random player assigned as "IMPOSTOR"
- All other players receive the generated word
- Sequential role reveal (one player at a time)
- Each player sees their role privately on the device

### 5. **Sequential Role Reveal**
- Players gather around the device
- Each player presses "I've Seen My Role - Next Player"
- Role displayed in large text only that player can see
- Progress indicator shows X of Y players completed
- Automatic transition to ready phase when all roles revealed

## 🔧 Technical Implementation

### Component Architecture
```
src/pages/word-impostor-game.astro (Page)
└── src/components/WordImpostorGame.astro (Game Logic)
    └── src/pages/api/generate-word.ts (OpenAI Integration)
```

### Data Flow
1. **Player Input** → Stored in localStorage
2. **Theme Submission** → Sent to API endpoint
3. **API Call** → OpenAI GPT-4o Mini generates word
4. **Word Generation** → Returns specific character/entity
5. **Role Assignment** → Randomly assign impostor
6. **Word Storage** → Saved to history in localStorage

### localStorage Keys
- `wordImpostorGame_players` - Player list with avatars
- `wordImpostorGame_usedAvatars` - Used avatar paths
- `wordImpostorGame_wordHistory` - Generated word for current game

## 🚀 Game Flow

```
Setup Phase
    ↓
Add Players (Min 2)
    ↓
Start Game
    ↓
Theme Selection
    ↓
Generate Word (ChatGPT)
    ↓
Sequential Role Reveal (Each player sees their role)
    ↓
Ready Phase (All roles revealed)
    ↓
Game In Progress (Display theme & players)
    ↓
New Game or Restart
```

## 💡 Example Game Scenarios

### Scenario 1: Movie Theme
- Theme: "The Lord of the Rings"
- Generated Word: "Gandalf"
- Impostor Player: Assigned randomly
- Other Players: All receive "Gandalf" as their secret word

### Scenario 2: Multiple Rounds
- Round 1 Theme: "Marvel"
  - Generated: "Spider-Man"
- Round 2 Theme: "Marvel"
  - Generated: "Captain America" (avoids "Spider-Man" from history)
- Round 3 Theme: "Marvel"
  - Generated: "Iron Man" (avoids previous words)

## 🔐 Privacy & Security
- All data stored locally in the browser
- No data sent to external servers (except OpenAI for word generation)
- API key stored only in server-side environment variables
- No player information transmitted outside the app

## 🎨 UI/UX Features
- Beautiful purple-themed interface matching the rest of the app
- Responsive design for desktop and mobile
- Clear phase transitions
- Real-time player list with avatars
- Progress indicators during word generation
- Disabled button states for minimum requirements

## 📊 Statistics & Analytics (Future Enhancement)
- Track generated words per theme
- Player statistics
- Most common impostors
- Win rates

## 🔧 Configuration
Only one environment variable required:
```
OPENAI_API_KEY=your_openai_api_key_here
```

See `WORD_IMPOSTOR_SETUP.md` for detailed setup instructions.
