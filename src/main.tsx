
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize the application with improved performance
document.addEventListener('DOMContentLoaded', () => {
  // Add a small delay to ensure smooth initial rendering
  setTimeout(() => {
    createRoot(document.getElementById("root")!).render(<App />);
  }, 10);
});
