import React from 'react';
import './Home.css';
import gym from './assets/images/gym.jpg';
import dumbell from './assets/images/dumbell.jpg';
import openspace from './assets/images/openspace.jpg';

function Home() {
  return (
    <>
            <div className="homemain">
                <div className="homeimages">
                    <div className="homecard1">
                        <img  src={gym} width="100%" height="60%" className="homecard" alt='not found'/>
                    </div>
                    <div className="homecard2">
                        <img src={dumbell} width="100%" height="60%" className="homecard" alt='not found'/>
                    </div>
                    <div class="homecard3">
                        <img src={openspace} width="100%" height="60%" className="homecard" alt='not found'/>
                    </div>
                </div>
                <div className="homedesc">
                    <h4>Get Savagely Strong,
                        Pack On Slabs Of Muscle,
                        Reach Your Physique Goals,
                        and Achieve Peak Performance!</h4>
                    <p>We coach strength seeking lifters to unlock their performance potential through world class programming, lifter focused technology, and unrivaled team culture.</p>
                </div>
            </div>
    </>
  );
}

export default Home