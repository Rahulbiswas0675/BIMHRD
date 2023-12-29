import "./App.scss";
import AppBar from "./Container/Navbar/AppBar";                            //Navbar Container
import HomePage from './Pages/HomePage';                                  //Home Section Component
import AboutPage from './Pages/AboutPage';                               //About Section Component
import MessagePage from './Pages/MessagePage';                          //Message Section Component
import ProgramsPage from './Pages/ProgramsPage';                       //MBA Programs Section Component
import PlacementsPage from './Pages/PlacementsPage';                  //Placements Section Component
import CampusAmbassadorPage from './Pages/CampusAmbassadorPage';     //CampusAmbassador Section Component
import AmbitionsPage from './Pages/AmbitionsPage';                  //Ambitions Section Component
import TestimonialPage from './Pages/TestimonialPage';             //Review Section Component
import ResearchPage from './Pages/ResearchPage';                  //Research Section Component
import RecruitersPage from './Pages/RecruitersPage';             //Recruiters Section Component
import FooterPage from "./Pages/FooterPage";                    //Footer & Contact Section Component

function App() {
  return (
    <div className="App">
      <AppBar/>
      <HomePage/>
      <AboutPage/>
      <MessagePage/>
      <ProgramsPage/>
      <PlacementsPage/>
      <CampusAmbassadorPage/>
      <AmbitionsPage/>
      <TestimonialPage/>
      <ResearchPage/>
      <RecruitersPage/>
      <FooterPage />
    </div>
  );
}

export default App;
