# Highcoon Studio App

This repository contains a minimal prototype for **Highcoon Studio**, an educational and lifestyle app for cannabis users interested in learning about terpenes through interactive experiences.  It is broken into two parts:

* **`backend`** – a Node.js GraphQL server that stores sample terpene and strain data, accepts check‑ins from users and returns simple recommendations.  It is meant as a starting point for a real backend and can be extended with a database, authentication and more sophisticated recommendation algorithms.
* **`mobile`** – a React Native (Expo) project that implements a handful of screens: onboarding, check‑in and a placeholder home screen.  It uses React Navigation for routing and shows how a basic user flow might look.

> **Note:** This prototype is deliberately lightweight; it focuses on the overall structure and does not implement gameplay, AI, or full certification flows.  Use it as a foundation to build the complete Highcoon Studio described in the concept document.

## Getting started

### Backend

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Start the GraphQL server:
   ```bash
   node src/index.js
   ```

3. The server will be available at `http://localhost:4000/graphql`.  You can open that URL in your browser to interact with GraphQL Playground.  The schema supports the following operations:

   * `query { terpenes { id name color aromas flavors sources effects } }` – list sample terpenes.
   * `query { strains { id name terpenes description } }` – list sample strains.
   * `mutation { checkIn(input: { strain: "Blue Dream", state: ["ansioso"], goal: ["calmado"] }) { games music stories glossary tips } }` – log a check‑in and receive simple recommendations.

### Mobile

1. Install dependencies:
   ```bash
   cd mobile
   npm install
   ```
   The app depends on Expo, React Navigation and a few core React Native packages.  If you don't have the Expo CLI installed globally, you can install it with `npm install -g expo-cli`.

2. Start the development server:
   ```bash
   npx expo start
   ```

3. Use the Expo Go app on your iOS or Android device, or an emulator, to scan the QR code and run the application.  You should see the onboarding screen, then the check‑in form, and finally a placeholder home screen.  These screens are defined in `mobile/screens` and routed via `mobile/navigation/AppNavigator.js`.

## Project structure

```
highcoon_app/
├── backend/
│   ├── package.json        # backend dependencies and scripts
│   └── src/
│       ├── index.js        # entry point that starts the Apollo GraphQL server
│       ├── schema.js       # GraphQL type definitions
│       ├── resolvers.js    # resolver functions for queries and mutations
│       └── data.js         # sample terpene and strain data plus in‑memory storage
└── mobile/
    ├── package.json        # mobile dependencies and scripts
    ├── App.js              # root component hooking into navigation
    ├── navigation/
    │   └── AppNavigator.js # defines the stack navigator
    └── screens/
        ├── Onboarding.js   # onboarding UI
        ├── CheckIn.js      # check‑in form
        └── Home.js         # placeholder home screen
├── games/               # standalone web‑based mini‑games
│   ├── maze_game.html   # "Trippy Terpene Trails" maze game
│   └── memory_game.html # "Memory de Terpenos" matching game
```

Feel free to expand this structure: for example, you might add a `games` folder for Unity modules, a `components` folder for reusable UI pieces, or a more robust API layer to call the backend.  The goal of this prototype is to provide a starting point for the full vision of Highcoon Studio.

## Included web‑based mini–games

Two simple HTML/JavaScript games are provided in the `games/` directory.  These games can be opened directly in a web browser or embedded in a WebView inside the mobile app to enrich the user experience.

| Game | File name | Description |
|------|-----------|-------------|
| **Trippy Terpene Trails** | `maze_game.html` | Navega un laberinto para recoger esferas de terpenos. Cada esfera revela datos sobre un terpene (limonene, myrcene, pinene, β‑caryophyllene). Usa las flechas o WASD para moverte. |
| **Memory de Terpenos** | `memory_game.html` | Empareja cartas de terpenos. Cada coincidencia exitosa muestra información sobre ese terpene. |
| **Dodge Bad Vibes Decision** | `dbv_decision.html` | Juego de decisiones basado en la narrativa: ayuda a Highcoon a elegir el terpene adecuado en situaciones críticas durante su escape de STIGMA. |

These games are intentionally lightweight and demonstrate how to build interactive educational experiences around terpenes. They can serve as inspiration for more advanced modules like **Dodge Bad Vibes Decision Making**, **Catch Good Vibes**, or story‑driven adventures described in the Highcoon universe.
