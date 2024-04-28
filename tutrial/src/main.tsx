import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Game from './pages/Game'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>,
    errorElement:<Error/>
  },
  {
    path : "/game",
    element : <Game/>
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
