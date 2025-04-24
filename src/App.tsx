import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import {DashboardPage} from "./pages/DashboardPage.tsx";
import { NewListPage } from './pages/NewListPage.tsx';
import { useListStore } from './stores/ListStore.tsx';
import { ErrorPage } from './pages/ErrorPage.tsx';
import { EditListPage } from './pages/EditListPage.tsx';

function App() {
  const lists = useListStore(state => state.lists);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage></DashboardPage>}/>
          <Route path="/new-list" element={<NewListPage></NewListPage>}/>
          <Route path="*" element={<ErrorPage></ErrorPage>}/>

          <Route path="/list/:listid">
            <Route index element={<div>List</div>}></Route>
            <Route path="edit" element={<EditListPage/>}/>
            <Route path="delete" element={<div>Delete list</div>}/>
          </Route>

        </Routes>
      </BrowserRouter>

      {/* <DashboardPage></DashboardPage> */}
    </>
  )
}

export default App
