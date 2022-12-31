import routes from '@/router'
import { useAppSelector } from '@/store'
import { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'

function App() {
  const { demo } = useAppSelector((state) => ({
    demo: state.demo.demo
  }))

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>{demo}</h2>
      <Suspense fallback="loading">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
