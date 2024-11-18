import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/index.css'
import { TournamentProvider } from './providers/tournament'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TournamentProvider>
      <App />
    </TournamentProvider>
  </React.StrictMode>
)
