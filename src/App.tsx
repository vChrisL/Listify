import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import {DashboardPage} from "./pages/DashboardPage.tsx";
import { NewListPage } from './pages/NewListPage.tsx';
import { ErrorPage } from './pages/ErrorPage.tsx';
import { EditListPage } from './pages/EditListPage.tsx';
import { ListItemsPage } from './pages/ListItemsPage.tsx';
import { DeleteListPage } from './pages/DeleteListPage.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage></DashboardPage>}/>
          <Route path="/new-list" element={<NewListPage></NewListPage>}/>
          <Route path="*" element={<ErrorPage></ErrorPage>}/>

          <Route path="/list/:listid">
            <Route index element={<ListItemsPage/>}></Route>
            <Route path="edit" element={<EditListPage/>}/>
            <Route path="delete" element={<DeleteListPage/>}/>
          </Route>

        </Routes>
      </BrowserRouter>

      {/* <DashboardPage></DashboardPage> */}
    </>
  )
}

export default App
