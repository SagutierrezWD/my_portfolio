import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/themeContext.tsx';
import { MenuStatusProvider } from './context/menuContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <MenuStatusProvider>
        <App />
      </MenuStatusProvider>
    </ThemeProvider>
  </StrictMode>,
)
