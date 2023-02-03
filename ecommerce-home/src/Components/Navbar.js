import React from 'react';
import './Navbar.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage/Home';
import Membership from './Membership/Membership';
import Subscription from './Subscription/Subscription';
import Error from './Error';
import dumbbell_solid from './assets/icons/dumbbell-solid.svg';
import search from './assets/icons/search.svg';
import person_fill from './assets/icons/person-fill.svg';
import bag_fill from './assets/icons/bag-fill.svg';

function Navbar() {
  return (
    <BrowserRouter>
            <div className="navmain">
                <div className="navintro">
                    <div className="navname">
                        <h2 className="navname1">Maverick Fitness Studio</h2>
                    </div>
                    <div className="navwel">
                        <p>Welcome <span> </span>!</p>
                    </div>
                </div>
                <div className="navnav">
                    <div class="navlogo">
                        <img src={dumbbell_solid} width="40%" alt='not found'/>
                    </div>
                    <div className="navmenu">
                        <ul>
                            <li>
                                <Link className="links" to='/'>Home</Link>
                            </li>
                            <li>
                                <Link className="links" to='/membership'>Membership</Link>
                            </li>
                            <li>
                                <Link className="links" to='/subscription'>Subscription</Link>
                            </li>   
                        </ul>
                    </div>
                    <div className="navparent">
                        <div id="navsearch">
                            <img src={search} width="10%" id="navicon" alt='not found'/>
                            <input type="text" placeholder="Search" autocomplete="none" className="navsearch"/>
                        </div>
                    </div>
                    <div className="navlogin">
                        <div className="navlogin1">
                            <img src={person_fill}  width="40%" alt='not found'/>
                            <p>Profile</p>
                        </div>
                        <div className="navlogin1">
                            <img src={bag_fill}  width="40%" alt='not found'/>
                            <p>Checkout</p>
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='/membership' element={<Membership/>}/>
                    <Route path='/subscription' element={<Subscription/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </div>
    </BrowserRouter>
  )
}

export default Navbar