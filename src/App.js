import "./App.scss";
import AppBar from "./Container/Navbar/AppBar";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import MessagePage from './Pages/MessagePage';
import StreamPage from './Pages/StreamPage';
import PlacementsPage from './Pages/PlacementsPage';
import CampusAmbassadorPage from './Pages/CampusAmbassadorPage';
import ContactPage from './Pages/ContactPage';
import TestimonialPage from './Pages/TestimonialPage';
import ConnectedPage from './Pages/ConnectedPage';
import JoinusPage from './Pages/JoinusPage';
import FooterPage from "./Pages/FooterPage";

function App() {
  return (
    <div className="App">
      <AppBar/>
      <HomePage/>
      <AboutPage/>
      <MessagePage/>
      <StreamPage/>
      <PlacementsPage/>
      <CampusAmbassadorPage/>
      <ContactPage/>
      <TestimonialPage/>
      <ConnectedPage/>
      <JoinusPage/>
      <FooterPage />
    </div>
  );
}

export default App;
