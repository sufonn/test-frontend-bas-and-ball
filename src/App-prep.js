import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import imgBasDesktop from "./assets/images/bas-desktop.svg";
import imgFootballDesktop from "./assets/images/football-desktop.svg";
import imgBasTablet from "./assets/images/bas-tablet.svg";
import imgFootballTablet from "./assets/images/football-tablet.svg";
import imgBasMobile from "./assets/images/bas-mobile.svg";
import imgFootballMobile from "./assets/images/football-mobile.svg"

function App () {
    const handleDragStart = (e) => e.preventDefault();
    const itemsAthlets = [
      <div className="pt-18 px-6-sm card" onDragStart={handleDragStart}>
        <div className="flex pb-6">
          <div className="text-black span">01<hr className="text-purple-01" /></div>
          <h4 className="text-gray-01 pl-2-sm">CONNECTION</h4>
        </div>
        <p className="text-black">Connect with coaches directly, you can ping coaches to view profile.</p>
      </div>,
      <div className="py-18 px-6-sm card" onDragStart={handleDragStart}>
        <div className="flex pb-6">
          <div className="text-black span">02<hr className="text-purple-01" /></div>
          <h4 className="text-gray-01 pl-2-sm">COLLABORATION</h4>
        </div>
        <p className="text-black">Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</p>
      </div>,
      <div className="py-18 px-6-sm card" onDragStart={handleDragStart}>
        <div className="flex pb-6">
          <div className="text-black span">03<hr className="text-purple-01" /></div>
          <h4 className="text-gray-01 pl-2-sm">GROWTH</h4>
        </div>
        <p className="text-black">Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc</p>
      </div>
    ];

    const itemsPlayer = [
      <div className="pt-16 px-6-sm card" onDragStart={handleDragStart}>
        <div className="flex pb-6">
          <div className="text-black span">01<hr className="text-purple-01" /></div>
          <h4 className="text-gray-01 pl-2-sm">CONNECTION</h4>
        </div>
        <p className="text-black">Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.</p>
      </div>,
      <div className="py-16 px-6-sm card" onDragStart={handleDragStart}>
        <div className="flex pb-6">
          <div className="text-black span">02<hr className="text-purple-01" /></div>
          <h4 className="text-gray-01 pl-2-sm">COLLABORATION</h4>
        </div>
        <p className="text-black">Work with recruiter to increase your chances of finding talented athlete.</p>
      </div>,
      <div className="py-16 px-6-sm card" onDragStart={handleDragStart}>
        <div className="flex pb-6">
          <div className="text-black span">03<hr className="text-purple-01" /></div>
          <h4 className="text-gray-01 pl-2-sm">GROWTH</h4>
        </div>
        <p className="text-black">Save your time, recruit proper athlets for your team.</p>
      </div>
    ];

    return (
        <div className="container bg-white">
        <div className="">
          {window.innerWidth > 767 ? 
            <React.Fragment>
              <div className="athlets">
                <div className="img-container w-75-sm">
                    <img src={window.innerWidth > 1279 ? imgFootballDesktop : window.innerWidth > 767 ? imgFootballTablet : imgFootballMobile} alt="ball-player" className="w-full w-80-lg"/>
                </div>
                <div className="pt-8-xl pt-10-lg pt-20-md pt-12 pb-14-xl pb-10-lg pb-8 pl-50pc-xl pl-50pc-lg pl-38pc-md pr-64-xl pr-24-lg">
                    <h2 className="text-gray-02 pb-16-xl pb-8-lg pb-10-md">ATHLETS</h2>
                    <div className="flex pb-6">
                    <div className="text-black span">01<hr className="text-purple-01" /></div>
                    <h4 className="text-gray-01 pl-4">CONNECTION</h4>
                    </div>
                    <p className="text-black">Connect with coaches directly, you can ping coaches to view profile.</p>
                </div>
                <div className="bg-light-purple-02 py-14-xl py-14-lg py-8-md pl-50pc-xl pl-50pc-lg pl-38pc-md pr-64-xl pr-24-lg pr-10">
                    <div className="flex pb-6">
                    <div className="text-black span">02<hr className="text-purple-01" /></div>
                    <h4 className="text-gray-01 pl-4">COLLABORATION</h4>
                    </div>
                    <p className="text-black">Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</p>
                </div>
                <div className="bg-purple-02 py-22-xl py-20-lg py-10-md pb-16-md pl-50pc-xl pl-50pc-lg pl-38pc-md pr-64-xl pr-24-lg pr-10">
                    <div className="flex pb-6">
                    <div className="text-black span">03<hr className="text-white" /></div>
                    <h4 className="text-gray-01 pl-4">GROWTH</h4>
                    </div>
                    <p className="text-white">Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc</p>
                </div>
              </div>  
              <div className="player">
                <div className="img-container">
                  <img src={window.innerWidth > 1279 ? imgBasDesktop : window.innerWidth > 767 ? imgBasTablet : imgBasMobile} alt="bas-player" className="w-full w-80-lg" />
                </div>
                <div className="pt-32-xl pt-20-lg pt-14 pb-14-xl pb-12-lg pb-4-md pl-80-xl pl-54-lg pl-8">
                  <h2 className="text-gray-02 pb-18-xl pb-16-lg pb-10-md">PLAYERS</h2>
                  <div className="flex pb-6 pb-4-md">
                    <div className="text-black span">01<hr className="text-purple-01" /></div>
                    <h4 className="text-gray-01 pl-4">CONNECTION</h4>
                  </div>
                  <p className="text-black w-39-xl w-40-lg w-60-md">Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.</p>
                </div>
                <div className="bg-light-purple-02 pt-13-xl pt-8-lg py-14-md pb-24-xl pb-10-lg pb-16-md pl-80-xl pl-54-lg pl-8">
                  <div className="flex pb-6 pb-4-md">
                    <div className="text-black span">02<hr className="text-purple-01" /></div>
                    <h4 className="text-gray-01 pl-4">COLLABORATION</h4>
                  </div>
                  <p className="text-black w-35-lg w-55-md">Work with recruiter to increase your chances of finding talented athlete.</p>
                </div>
                <div className="bg-dark-purple pt-22-xl pt-10-lg pt-10-md pb-16 pl-80-xl pl-54-lg pl-8">
                  <div className="flex pb-6 pb-4-md">
                    <div className="text-light-purple-01 span">03<hr className="text-white" /></div>
                    <h4 className="text-gray-01 pl-4">GROWTH</h4>
                  </div>
                  <p className="text-white">Save your time, recruit proper athlets for your team.</p>
                </div>
              </div>
            </React.Fragment>
            :
            <React.Fragment>
              <div className="athlets mb-4">
                <div className="pl-5">
                  <h2 className="text-gray-02 pb-16-xl pb-8-lg pb-10-md">ATHLETS</h2>
                </div>
                <div className="img-container w-70-sm">
                  <img src={imgFootballMobile} alt="ball-player" className="w-full"/>
                </div>
                <AliceCarousel 
                  mouseTracking items={itemsAthlets} 
                  disableButtonsControls={true} 
                />
              </div>
              <div className="player mt-3">
                <div className="pl-5">
                  <h2 className="text-gray-02 pb-16-xl pb-8-lg pb-10-md">PLAYERS</h2>
                </div>
                <div className="img-container">
                  <img src={imgBasMobile} alt="ball-player" className="w-full"/>
                </div>
                <AliceCarousel
                  mouseTracking items={itemsPlayer} 
                  disableButtonsControls={true} 
                />
              </div>
            </React.Fragment>
          }
          
        </div>
    </div>
    )
}

export default App;