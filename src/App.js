import "./App.css";
import { HomePage } from "./view/HomePage/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsPage } from "./view/CreateForm/detailsPage";
import { UpdatePage } from "./view/Update/UpdatePage";
import { ViewPage } from "./view/Read/ViewPage";
import { DeletePage } from "./view/Delete/deletePage";
import NavBar from "./view/NavBar.jsx";
import { UserContext } from "././hooks/dataProvider";
import { UpdateDetailsPage } from "./view/Update/updateDetail";
import { useState } from "react";
import { DeleteBySid } from "./view/Delete/deleteBySid";
function App() {
  const [data, setData] = useState({
    sid: "",
  });
  return (
    <div className="App">
      <UserContext.Provider value={[data,setData]}>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"formDetails"} element={<DetailsPage />} />
            <Route path={"view"} element={<ViewPage />} />
            <Route path={"update"} element={<UpdatePage />} />
            <Route path={"delete"} element={<DeletePage />} />
            <Route path={"updateDetails"} element={<UpdateDetailsPage />} />
            <Route path={"deleteBySid"} element={<DeleteBySid />} />

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
