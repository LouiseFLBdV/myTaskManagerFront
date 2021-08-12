import './App.css';
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Footer from './components/footer/Footer';
import Main from "./components/main/Main";

function App(props) {
  return (
    <div className="App">
      <Header/>
      <SideBar/>
        <Main state={props.state} addUser={props.addUser}/>
      <Footer/>
    </div>
  );
}

export default App;
