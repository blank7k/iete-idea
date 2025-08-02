# IETE Committee Website - Hero Section

A modern, responsive hero section for the Electronics Committee website built with React and TailwindCSS.

## Features

- 🎨 **Visually Attractive Design**: Modern gradient background with tech-themed styling
- 🎬 **Lottie Animation**: Circuit board/robot animation that autoplays and loops
- 📱 **Fully Responsive**: Looks great on mobile, tablet, and desktop
- ✨ **Smooth Animations**: Fade-in and slide-up animations for content
- 🎯 **Interactive Buttons**: Hover effects with scale and color transitions
- 📜 **Scroll Indicator**: Animated scroll-down indicator at the bottom
- 🌟 **Floating Elements**: Subtle animated background elements

## Tech Stack

- **React 18** - Modern React with hooks
- **TailwindCSS** - Utility-first CSS framework
- **@lottiefiles/react-lottie-player** - Lottie animation player
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   └── HeroSection.js    # Main hero section component
├── App.js                # Main app component
├── index.js             # React entry point
└── index.css            # Global styles with TailwindCSS
```

## Customization

### Changing the Lottie Animation

Replace the `src` URL in `HeroSection.js`:

```jsx
<Player
  autoplay
  loop
  src="YOUR_LOTTIE_URL_HERE"
  style={{ height: '400px', width: '100%' }}
/>
```

### Modifying Colors

Update the gradient classes in `HeroSection.js`:

```jsx
// Current: blue-900 via-purple-900 to-indigo-900
// Change to your preferred colors
className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
```

### Adding More Sections

Extend the `App.js` component to include additional sections below the hero.

## Features Implemented

✅ **Center Animation**: Lottie circuit board animation with autoplay and loop  
✅ **Text Content**: "Welcome to IETE Committee" with tagline and buttons  
✅ **Styling**: Tech-themed gradient background with responsive design  
✅ **Hover Effects**: Animated buttons with scale and color transitions  
✅ **Scroll Indicator**: Animated scroll-down indicator  
✅ **Responsive Design**: Mobile-first approach with breakpoint optimization  

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

---

**IETE Committee** - Innovation. Circuitry. Excellence. 