# React Native Interview App

A React Native application built with Expo that demonstrates native module integration, API consumption, and modern React Native development practices.

## 📱 Features

### 1. Battery Status Module
- **Native Integration**: Custom native modules for iOS (Swift) and Android (Kotlin)
- **Real-time Battery Monitoring**: Displays current device battery percentage
- **Visual Feedback**: 
  - Color-coded battery status (Green/Yellow/Red)
  - Battery emoji indicators (🔋/🪫/⚠️)
  - Progress bar visualization
- **Error Handling**: Graceful handling for simulator environments
- **Refresh Functionality**: Manual refresh to update battery level

### 2. Pokemon Integration
- **Dynamic Pokemon Selection**: Uses battery percentage as Pokemon ID
  - Example: 45% battery → Fetches Pokemon #45 (Machoke)
  - Simulator (0%): Defaults to Pokemon #1 (Bulbasaur)
- **Comprehensive Pokemon Data**: 
  - Pokemon sprites and images
  - Types, abilities, and stats
  - Full TypeScript type definitions
- **API Integration**: Consumes [PokeAPI](https://pokeapi.co/) for Pokemon data
- **Loading States**: Proper loading indicators and error handling

## 🏗️ Project Structure

```
rn-interview-app/
├── app/                          # Expo Router app directory
│   ├── (tabs)/                   # Tab navigation
│   │   ├── index.tsx             # Battery Status screen
│   │   └── pokemon/
│   │       └── index.tsx         # Pokemon Details screen
│   └── _layout.tsx               # Root layout
├── api/                          # API layer
│   ├── hooks/                    # Custom React hooks
│   │   ├── useBattery.ts         # Battery state management
│   │   └── usePokemon.ts         # Pokemon state management
│   ├── services/                 # API services
│   │   ├── batteryService.ts    # Battery API service
│   │   └── pokemonService.ts    # Pokemon API service
│   └── types/                    # TypeScript type definitions
│       └── pokemon.ts            # Pokemon API types
├── modules/                      # Feature modules
│   ├── battery/                  # Battery module UI
│   │   ├── index.tsx
│   │   ├── styles.ts
│   │   └── utils.ts
│   ├── battery-module/           # Native battery module
│   │   ├── ios/                  # iOS native code (Swift)
│   │   ├── android/              # Android native code (Kotlin)
│   │   └── src/                  # TypeScript definitions
│   └── pokemon/                  # Pokemon module UI
│       ├── index.tsx
│       └── styles.ts
└── constants/                    # App constants
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Emulator (for Android development)
- For battery features: Physical iOS/Android device (simulator shows 0%)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rn-interview-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app for physical device

### Building for Native

**iOS:**
```bash
npm run ios
# or
npx expo run:ios
```

**Android:**
```bash
npm run android
# or
npx expo run:android
```

## 🛠️ Technical Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router (file-based routing)
- **State Management**: React Hooks (useState, useEffect)
- **Native Modules**: 
  - iOS: Swift
  - Android: Kotlin
- **API**: PokeAPI (REST)
- **Styling**: React Native StyleSheet

## 📋 Key Implementation Details

### Native Battery Module

**iOS (Swift):**
- Uses `UIDevice.current.batteryLevel` to get battery percentage
- Returns 0 if battery is unavailable (simulator)
- Always returns positive values

**Android (Kotlin):**
- Uses `BatteryManager` to get battery level
- Handles battery state changes
- Returns 0 if battery is unavailable

### Pokemon Integration

- Battery percentage dynamically determines Pokemon ID
- Validates battery level (1-100) before API call
- Falls back to Pokemon #1 if battery is 0% or invalid
- Full TypeScript types for type safety

### State Management

- Custom hooks (`useBattery`, `usePokemon`) for reusable state logic
- Loading states for better UX
- Error handling with user-friendly messages
- Service layer separation for API calls

## 🧪 Testing

### Battery Module
- **Physical Device**: Shows actual battery percentage
- **Simulator**: Shows 0% with helpful message

### Pokemon Module
- **Physical Device**: Fetches Pokemon matching battery percentage
- **Simulator**: Fetches Pokemon #1 (Bulbasaur)

## 📝 Notes

- Battery features work best on physical devices
- Simulator limitations: Battery always shows 0%
- Pokemon API is free and doesn't require authentication
- All battery values are normalized to be positive (0-100)

## 🤝 Contributing

This is an interview project. For questions or issues, please contact the project maintainer.

## 📄 License

Private project - All rights reserved

---

Built with ❤️ using React Native and Expo
