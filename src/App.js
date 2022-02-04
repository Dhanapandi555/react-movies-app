
import './App.css';
import  Header  from './components/header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Trending from "./Pages/Trending/Trending"
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
     
      <Container>
        <Routes>
          <Route path="/"  exact element={<Trending/>}/>
          <Route path="/movies" element={<Movies/>} />
          <Route path="/series" element={<Series/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation/>
   
    </BrowserRouter>
  );
}

export default App;
