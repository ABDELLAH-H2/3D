
# 🚀 abdellah Portfolio

Welcome to my personal portfolio! This project showcases my skills and work through an immersive 3D experience. It was built with a focus on performance, interactivity, and modern web design principles.


This project is **inspired** by the work of [Naresh Khatri](https://github.com/Naresh-Khatri/Portfolio).

## 🛠️ How It Was Made

This portfolio is not just a collection of static pages; it's a fully interactive 3D application. Here is a deep dive into the technical implementation and how the animations works.

### 1. The Core Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router) for robust routing and server-side rendering.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety and better developer experience.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for rapid, utility-first styling.
- **3D Engine**: [Spline](https://spline.design/) for creating and rendering the 3D scenes.
- **Animation**: [GSAP](https://gsap.com/) (GreenSock) for complex scroll-based animations and timeline management.
- **Motion**: [Framer Motion](https://www.framer.com/motion/) for UI component transitions.

### 2. The 3D Animation System (`AnimatedBackground.tsx`)

The heart of the portfolio is the `AnimatedBackground` component. Here's how it works:

#### The 3D Model
The 3D scene (Keyboard and floating elements) was created in **Spline**. It is loaded into the React application using `@splinetool/react-spline`. This allows us to access the 3D objects directly via code.

#### Synchronized Scroll Animations (GSAP)
We use **GSAP ScrollTrigger** to synchronize the 3D camera and object positions with the user's scroll.
- The `STATES` constant defines the exact `position`, `rotation`, and `scale` of the 3D keyboard for each section (`hero`, `about`, `skills`, `projects`, `contact`).
- As you scroll, GSAP interpolates between these states, smoothly moving the keyboard to its new position.
- Separate configurations are used for **Mobile** and **Desktop** to ensure the 3D model looks perfect on all screen sizes.

```typescript
// Example of how we define states for different sections
const STATES = {
  hero: {
    desktop: { position: { x: 400, y: -200, z: 0 }, ... },
    mobile:  { position: { x: 0, y: -200, z: 0 }, ... }
  },
  // ... other sections
};
```

#### Interactive Keycaps
Each keycap on the 3D keyboard is an interactive object.
- **Event Listeners**: We attach `mouseHover` and `keyDown` events to the Spline scene.
- **State Management**: When a user hovers over a key, the app identifies the key name, looks up the corresponding skill in our data, and updates the React state.
- **Feedback**: This state change triggers the UI to display the skill name and description, creating a seamless bridge between the 3D world and the 2D UI.

### 3. Performance Optimization
- **Lazy Loading**: The heavy 3D scene is lazy-loaded with a customized preloader to ensure the initial page load is fast.
- **Suspense**: React Suspense is used to handle the loading state gracefully.

## 🔥 Features

- **🎹 Interactive 3D Keyboard**: Hover over keys to see my skills light up!
- **🌌 Cosmic Theme**: A particle-based space background that sets a futuristic tone.
- **📱 Responsive**: Optimized 3D camera angles for both mobile and desktop users.
- **⚡ Smooth Transitions**: Buttery smooth page navigation and element reveals.



## 📬 Contact

- **Email:** contact@abdellahalioua.com
- **LinkedIn:** [Abdellah Alioua](https://www.linkedin.com/in/abdellah-alioua-7b8289384/)

---
⭐ If you enjoyed this project or found it helpful, please give it a star!
