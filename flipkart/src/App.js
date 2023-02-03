import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <div class="nav">
          <div class="menu">
            <ul>
              <li><Link className="links" to='/'>Home</Link></li>
              <li><Link  className="links" to='/about'>About</Link></li>
              <li><Link  className="links" to='/contact'>Contact</Link></li>
            </ul>
          </div>
      </div>
      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link> */}
      <h2>Tabrez</h2>
    </div>
    </BrowserRouter>
  );
}

export default App;
