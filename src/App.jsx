import "./App.css";
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Recommended from './components/Recommended';
import Search from './components/Search';

function App() {
  
  return (
    // React fragment -> Can also be used as React.Fragment
    <>
      <Navbar></Navbar>
      <Search />
      <Carousel />
      <Recommended />
    </>
  );
}

export default App;
