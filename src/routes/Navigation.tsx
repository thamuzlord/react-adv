import { Suspense } from "react"
import { BrowserRouter, Route, NavLink, Routes, Navigate } from "react-router-dom"
import logo from '../logo.svg'
import {routes} from './routes'



export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
      <div className="main-layout">
          <nav>
              <img src={logo} alt="" />
          
              <ul>
                {
                  routes.map(({to, name}) => (
                    <li key={to}>
                      <NavLink to={to} className={({isActive})=>isActive?'nav-active':''}>{name}</NavLink>
                    </li>
                  ))
                }
              </ul>

          </nav>
      
          <Routes>
              {
                routes.map(({to, Component, path})=> (
                  <Route key={to} path={path} element={<Component />} />
                ))
              }

              <Route path="/*" element={<Navigate to="lazy1" replace />} />
          </Routes>
          </div>
      </BrowserRouter>
    </Suspense>
  )
}
