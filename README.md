# FlipClock React

A modern React implementation of the FlipClock web application with beautiful themes, flip animations, and responsive design.

## Features

- **Real-time Clock Display**: Shows current time with smooth updates
- **Flip Animation**: Smooth card-flip animations for time changes (PRO feature)
- **Multiple Themes**: 8+ beautiful color themes to choose from
- **Dark/Light Mode**: Toggle between dark and light modes
- **24-Hour Format**: Switch between 12-hour and 24-hour time formats
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **User Status System**: Basic and PRO subscription tiers with different features

## Components

### Clock
The main clock component that displays the current time with optional flip animations.

### FlipCard
A reusable component that creates smooth flip animations for individual digits.

### ThemeSelector
A grid-based theme selector allowing users to choose from various color schemes.

### Menu
A comprehensive menu system with controls for themes, settings, and user features.

## Hooks

### useTheme
A custom hook that manages theme state, dark/light mode, and applies CSS custom properties.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Usage

- **Theme Selection**: Click the menu button (bottom right) and then click on BASIC/PRO badges to open theme selector
- **Dark/Light Mode**: Use the toggle switch in the menu
- **24-Hour Format**: Toggle the 24H Format switch in the menu controls
- **Fullscreen**: Click the fullscreen icon in the menu

## Subscription Tiers

- **Free**: Basic clock functionality with flip animations
- **BASIC**: Access to 8+ themes
- **PRO**: All features including themes, flip animations, and timezone support

## Responsive Design

The application is fully responsive and adapts to:
- Desktop screens (full features)
- Tablets (optimized layout)
- Mobile devices (portrait and landscape orientations)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Technologies Used

- React 18
- CSS3 with CSS Custom Properties
- CSS Grid and Flexbox
- CSS Animations and Transitions
- Local Storage for preferences
- Responsive Design principles

## License

This project is a React conversion of the original FlipClock web application.