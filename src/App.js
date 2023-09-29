import logo from "./logo.svg";
import "./App.css";
import "./header.css";
import Page from "./page";
import { Route, Routes } from "react-router-dom";
import EditHeader from "./admin/edit-header";
import EditAbout from "./admin/edit-about";
import EditIntro from "./admin/edit-intro";
import EditSolution from "./admin/edit-solution";
import EditPartners from "./admin/partners";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route index element={<Page />} />
            <Route path={"/admin/edit-header"} element={<EditHeader />} />
            <Route path={"/admin/edit-about"} element={<EditAbout />} />
            <Route path={"/admin/edit-intro"} element={<EditIntro />} />
            <Route path={"/admin/edit-solution"} element={<EditSolution />} />
            <Route path={"/admin/edit-partners"} element={<EditPartners />} />
         </Routes>
      </div>
   );
}

export default App;
