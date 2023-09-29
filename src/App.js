import logo from "./logo.svg";
import "./App.css";
import "./header.css";
import Page from "./page";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./admin/Layout";
import EditHeader from "./admin/edit-header";
// import EditIntro from "./admin/edit-intro";
import EditAbout from "./admin/edit-about";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route index element={<Page />} />
            <Route path={"/admin/edit-header"} element={<EditHeader />} />
            <Route path={"/admin/edit-about"} element={<EditAbout />} />
            {/* <Route path={"/admin/edit-intro"} element={<EditAbout />} /> */}
         </Routes>
      </div>
   );
}

export default App;
