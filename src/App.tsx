import './App.css';
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Footer from './components/footer/Footer';
import Main from "./components/main/Main";

function App(props: any) {
  return (
    <div className="App">
      <Header/>
      <SideBar/>
        <Main state={props.state} dispatch={props.dispatch}/>
      <Footer/>
    </div>
  );
}

export default App;
