import './App.css';
//import Navbar from './components/navbar/Navbar';
import Features from './components/features/Features';
import Gallery from './components/gallery/Gallery';
import Realtors from './components/realtors/Realtors';
import Header from './components/header/Header';
import Stories from './components/story/Stories';
import HomesList from './components/homes-list/HomesList';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="grid-container">    
       <Header /> 
       <Realtors/>
       <Features />
       <Stories/>
       <HomesList/>
       <Gallery/>
       <Footer/>
     </div> 
  );
}

export default App;
