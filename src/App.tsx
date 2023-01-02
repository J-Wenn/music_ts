import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'
import routes from '@/router'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading">{useRoutes(routes)}</Suspense>
      <AppFooter />
    </div>
  )
}

export default App
