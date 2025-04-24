import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage.tsx';
import { NewListPage } from './pages/NewListPage.tsx';

const router = createBrowserRouter([
  {path: "/", element: <App/>},
  {path: "/new-list", element: <NewListPage/>},
  {
    path: "/list", 
    element: <div>List page</div>,
    children: [
      {
        path: "delete",
        element: <div>Delete list page</div>
      },
      {
        path: "edit",
        element: <div>Edit list page</div>
      }
    ]
  },

  {path: "*", element: <ErrorPage/>},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App></App>
  </StrictMode>,
)
