# Instagram Clone Frontend

A React-based Instagram clone frontend built with Redux, Tailwind CSS, and React Router.

## Features

- 🔐 User Authentication (Login/Register)
- 📸 Create and view posts
- ❤️ Like posts
- 💬 Comment on posts
- 👤 User profiles
- 📱 Responsive design

## Tech Stack

- **React 18** - UI framework
- **Redux** - State management
- **React Router v6** - Routing
- **Tailwind CSS** - Styling
- **Axios** - HTTP client

## Installation

```bash
npm install
```

## Environment Setup

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

## Running the App

```bash
npm start
```

The app will run on `http://localhost:3000`

## Project Structure

```
src/
├── components/      # Reusable components (Navbar, Post)
├── pages/          # Page components (Home, Login, Register, Profile)
├── redux/
│   ├── actions/    # Redux actions
│   ├── reducers/   # Redux reducers
│   └── store.js    # Redux store configuration
├── App.js          # Main app component
├── index.js        # Entry point
└── index.css       # Global styles
```

## API Integration

The frontend connects to the backend API at:
- **Development**: `http://localhost:5000/api`
- Configure via `REACT_APP_API_URL` in `.env`

## Build for Production

```bash
npm run build
```

## License

MIT
