import { Hero } from "./component/Hero";
import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Hero/>
    
    </div>
  );
}

export default App;
