import './App.css';
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Footer from './components/footer/Footer';
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      <SideBar/>
        <Main/>
      <Footer/>
    </div>
  );
}

export default App;
