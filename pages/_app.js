import React from 'react'
import { ThemeProvider } from '../components/themeProvider'
import Background from '../components/background'
import Toggle from '../components/themeToggle'
import '../styles/globals.css'
import '../styles/markdown.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Background>
          <main className="font-sans dark:text-white">
            <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6">
              <Toggle />
            </div>

            <div className="w-full min-h-screen">
              <Component {...pageProps} />
            </div>
          </main>
        </Background>
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default MyApp
