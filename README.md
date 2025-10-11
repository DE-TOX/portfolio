# Portfolio Website

A modern, interactive portfolio website showcasing my work as a Software Developer. Built with React, TypeScript, and cutting-edge web technologies to deliver a stunning visual experience.

## 🚀 Features

- **Fluid Background Animation**: Interactive liquid ether background with WebGL shaders
- **Animated Text Effects**: Decryption and fuzzy text animations for engaging content
- **3D Card Interactions**: Card swap animations with physics-based movements
- **Spotlight Cards**: Interactive project cards with cursor-following spotlight effects
- **Infinite Scroll**: Tilted, auto-scrolling tech stack display
- **Responsive Design**: Fully responsive across all devices
- **Code Splitting**: Optimized bundle size with lazy loading
- **Smooth Animations**: GSAP-powered smooth transitions

## 🛠️ Tech Stack

### Core
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling

### Animation & 3D
- **GSAP** - Professional-grade animations
- **Three.js / React Three Fiber** - 3D graphics and WebGL
- **Framer Motion** - React animation library

### UI Components
- **Lucide React** - Icon library
- **Custom React Bits Components** - Reusable interactive components

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/DE-TOX/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── LiquidEther.tsx  # WebGL fluid background
│   │   ├── CardSwap.tsx     # Card swap animation
│   │   ├── SpotlightCard.tsx # Spotlight effect cards
│   │   ├── InfiniteScroll.tsx # Auto-scrolling component
│   │   ├── DecryptedText.tsx # Text decryption animation
│   │   ├── FuzzyText.tsx    # Fuzzy text effect
│   │   └── Dock.tsx         # macOS-style dock navigation
│   ├── App.tsx              # Main application component
│   ├── App.css              # Global styles
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
└── README.md
```

## 🎨 Sections

### Hero
- Animated name with decryption effect
- Professional title
- Key statistics (40% performance boost, 200+ components refactored)
- Rotating project cards showcasing featured work

### Projects
Three main personal projects displayed in cards:
1. **SyncUp** - Real-time team wellness platform with AI analytics
2. **PromptGrade** - LLM prompt optimization tool
3. **Redis Project Endpoints** - API documentation for real-time sync system

### Contact
- Animated "Let's Build Together" CTA
- Social links (LinkedIn, GitHub, Email, Resume)
- Footer with copyright info

### Skills
- Infinite scrolling display of tech stack
- Tilted perspective view
- Auto-play with pause on hover
- Technologies: JavaScript, React, Vue, Node.js, Redis, and more

## 🚢 Deployment

### Build
```bash
npm run build
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

## 🎯 Performance Optimizations

- **Code Splitting**: Components lazy-loaded to reduce initial bundle size
- **Bundle Analysis**: Main bundle reduced from 1.5MB to 360KB
- **Image Optimization**: Optimized asset loading
- **Tree Shaking**: Unused code eliminated during build

### Bundle Breakdown
- LiquidEther: 493 KB (lazy-loaded)
- Main bundle: 360 KB
- InfiniteScroll: 11 KB (lazy-loaded)
- Other components: <3 KB each (lazy-loaded)

## 🔧 Configuration

### Theme Colors
```css
Primary: #5227FF (Purple)
Secondary: #FF9FFC (Pink)
Accent: #B19EEF (Lavender)
Highlight: #00F5D4 (Cyan)
```

### Customization
1. Update personal information in `App.tsx`
2. Replace project links and descriptions
3. Add your resume PDF to `/public/resume.pdf`
4. Modify color scheme in Tailwind config

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Divyansh Joshi**
- LinkedIn: [Divyansh Joshi](https://www.linkedin.com/in/divyansh-joshi-053691222/)
- GitHub: [@DE-TOX](https://github.com/DE-TOX)
- Email: taru.joshi14@gmail.com

## 🙏 Acknowledgments

- React Three Fiber for 3D graphics capabilities
- GSAP for smooth animations
- Lucide React for beautiful icons
- The open-source community for amazing tools and libraries

---

⭐️ If you found this helpful, please consider giving it a star!
