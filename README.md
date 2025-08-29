# Joshua Gilley Portfolio

A modern, responsive portfolio website built with Vue.js 3, TypeScript, and Tailwind CSS. Inspired by the creative design aesthetic of [p5aholic.me](https://p5aholic.me/).

## ✨ Features

- **Modern Tech Stack**: Vue.js 3 + TypeScript + Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Automatic theme switching with system preference detection
- **Smooth Animations**: CSS transitions and hover effects
- **Professional Layout**: Clean, modern design showcasing skills and projects
- **Performance Optimized**: Fast loading with Vite build system

## 🚀 Tech Stack

- **Frontend**: Vue.js 3 with Composition API
- **Styling**: Tailwind CSS v4 with custom design system
- **Build Tool**: Vite for fast development and optimized builds
- **Language**: TypeScript for type safety
- **Routing**: Vue Router for single-page application navigation
- **Fonts**: Inter (body) and JetBrains Mono (code)

## 📁 Project Structure

```
joshgilley/
├── src/
│   ├── views/           # Page components
│   │   ├── Home.vue     # Landing page
│   │   ├── Projects.vue # Portfolio showcase
│   │   ├── About.vue    # Personal information
│   │   └── Contact.vue  # Contact form
│   ├── components/      # Reusable components
│   ├── App.vue          # Main app component
│   ├── main.ts          # App entry point
│   └── style.css        # Global styles + Tailwind
├── public/              # Static assets
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd joshgilley
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Design Features

### Color Palette
- **Primary**: Blue tones (#0ea5e9) for main elements
- **Accent**: Purple tones (#d946ef) for highlights
- **Neutral**: Gray scale for text and backgrounds
- **Dark Mode**: Automatic theme switching

### Typography
- **Inter**: Modern, readable sans-serif for body text
- **JetBrains Mono**: Monospace font for code elements
- **Responsive**: Scalable font sizes across devices

### Animations
- **Hover Effects**: Subtle scale and shadow transitions
- **Smooth Transitions**: 200-300ms easing for all interactions
- **Loading States**: Spinner animations for form submissions

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind's responsive utilities
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Optimized images and lazy loading

## 🌙 Dark Mode

- **System Preference**: Automatically detects user's theme preference
- **Manual Toggle**: Users can override system preference
- **Persistent**: Remembers user's choice across sessions
- **Smooth Transitions**: Elegant theme switching animations

## 🚀 Performance

- **Vite Build**: Fast development and optimized production builds
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused CSS and JavaScript removed
- **Optimized Assets**: Compressed images and minified code

## 📝 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ }
}
```

### Content
Update the view components in `src/views/` to customize:
- Personal information
- Project details
- Contact information
- Skills and experience

### Styling
Modify `src/style.css` for custom CSS classes and global styles.

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style
- **Vue 3 Composition API** for component logic
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ESLint + Prettier** for code formatting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from [p5aholic.me](https://p5aholic.me/)
- Built with [Vue.js](https://vuejs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)

---

Built with ❤️ by Joshua Gilley
