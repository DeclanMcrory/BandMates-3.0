# BandMates 🎸

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)](https://tailwindcss.com/)

Transform your solo music tracks into dynamic full band performances with BandMates - an innovative AI-powered platform that generates professional-quality music videos featuring virtual band members.

## 📁 Project Structure

```
src/
├── components/
│   ├── core/           # Core UI components
│   │   ├── Header.tsx
│   │   └── Hero.tsx
│   ├── music/          # Music-related components
│   │   ├── FileUploader.tsx
│   │   └── UploadProgress.tsx
│   ├── customization/  # Customization UI
│   │   ├── StyleSelector.tsx
│   │   └── ThemeSelector.tsx
│   └── error/          # Error handling
│       └── ErrorBoundary.tsx
├── hooks/              # Custom React hooks
│   ├── useCustomization.ts
│   └── useUpload.ts
├── types/              # TypeScript definitions
│   └── index.ts
├── utils/              # Utility functions
│   ├── validation.ts
│   └── formatting.ts
└── App.tsx            # Main component
```

## 🔧 Development Guidelines

### Component Structure
- Each component should have a single responsibility
- Keep components small and focused
- Use TypeScript interfaces for props
- Implement error boundaries for fault tolerance

### Custom Hooks
- Extract reusable logic into custom hooks
- Follow the use* naming convention
- Keep hooks focused on specific functionality
- Implement proper cleanup in useEffect

### Utility Functions
- Create pure functions for common operations
- Implement proper error handling
- Add TypeScript types for parameters and returns
- Write unit tests for utilities

### Best Practices
- Use TypeScript for type safety
- Implement proper error handling
- Follow React's functional component patterns
- Use proper naming conventions
- Keep files small and focused

[Rest of the README remains the same...]