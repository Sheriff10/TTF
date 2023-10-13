import "./App.css";
import "./header.css";
import Page from "./page";
import { Route, Routes } from "react-router-dom";
import EditHeader from "./admin/edit-header";
import EditAbout from "./admin/edit-about";
import EditIntro from "./admin/edit-intro";
import EditSolution from "./admin/edit-solution";
import EditPartners from "./admin/partners";
import DataContextWrap from "./context/DataContext";
import EditRoadmap from "./admin/edit-roadmap";
import Login from "./admin/login";
import EditBot from "./admin/bots";

function App() {
   window.api = 'http://localhost:5000'
   // window.api = "https://good-teal-hermit-crab-cape.cyclic.cloud"
   return (
      <div className="App">
         <DataContextWrap>
            <Routes>
               <Route index element={<Page />} />
               <Route path={"/admin/edit-header"} element={<EditHeader />} />
               <Route path={"/admin/edit-about"} element={<EditAbout />} />
               <Route path={"/admin/edit-intro"} element={<EditIntro />} />
               <Route
                  path={"/admin/edit-solution"}
                  element={<EditSolution />}
               />
               <Route
                  path={"/admin/edit-partners"}
                  element={<EditPartners />}
               />
               <Route path={"/admin/edit-roadmap"} element={<EditRoadmap />} />
               <Route path={"/admin/edit-bot"} element={<EditBot />} />
               <Route path={"/admin/login"} element={<Login />} />

            </Routes>
         </DataContextWrap>
      </div>
   );
}

export default App;
