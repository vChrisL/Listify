import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage.tsx';
import { ErrorPage } from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/dashboard", element: <DashboardPage/>},
  {path: "*", element: <ErrorPage/>},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
