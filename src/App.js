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
        <div className="flex pb-4">
          <div className="text-black span">01<hr className="hr-purple-01" /></div>
          <h4 className="text-gray-01 pl-2-sm">CONNECTION</h4>
        </div>
        <p className="text-black">Connect with coaches directly, you can ping coaches to view profile.</p>
      </div>,
      <div className="py-18 px-6-sm card" onDragStart={handleDragStart}>
        <div className="flex pb-4">
          <div className="text-black span">02<hr className="hr-purple-01" /></div>
          <h4 className="text-gray-01 pl-2-sm">COLLABORATION</h4>
        </div>
        <p className="text-black">Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</p>
      </div>,
      <div className="py-18 px-6-sm card" onDragStart={handleDragStart}>
        <div className="flex pb-4">
          <div className="text-black span">03<hr className="hr-purple-01" /></div>
          <h4 className="text-gray-01 pl-2-sm">GROWTH</h4>
        </div>
        <p className="text-black">Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc</p>
      </div>
    ];

    const itemsPlayer = [
      <div className="pt-16 px-6-sm card" onDragStart={handleDragStart}>
        <div className="flex pb-4">
          <div className="text-black span">01<hr className="hr-purple-01" /></div>
          <h4 className="text-gray-01 pl-2-sm">CONNECTION</h4>
        </div>
        <p className="text-black">Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.</p>
      </div>,
      <div className="py-16 px-6-sm card" onDragStart={handleDragStart}>
        <div className="flex pb-4">
          <div className="text-black span">02<hr className="hr-purple-01" /></div>
          <h4 className="text-gray-01 pl-2-sm">COLLABORATION</h4>
        </div>
        <p className="text-black">Work with recruiter to increase your chances of finding talented athlete.</p>
      </div>,
      <div className="py-16 px-6-sm card" onDragStart={handleDragStart}>
        <div className="flex pb-4">
          <div className="text-black span">03<hr className="hr-purple-01" /></div>
          <h4 className="text-gray-01 pl-2-sm">GROWTH</h4>
        </div>
        <p className="text-black">Save your time, recruit proper athlets for your team.</p>
      </div>
    ];

    return (
        <div className="bg-white">
        {window.innerWidth > 767 ? 
            <React.Fragment>
              <div className="athlets">
                <div className="img-container w-75-sm">
                    <img src={window.innerWidth > 1279 ? imgFootballDesktop : window.innerWidth > 767 ? imgFootballTablet : imgFootballMobile} alt="ball-player" className="w-full img-lg"/>
                </div>
                <div className="block1">
                    <h2 className="text-gray-02">ATHLETS</h2>
                    <div className="flex pb-4">
                    <div className="text-black span">01<hr className="hr-purple-01" /></div>
                    <h4 className="text-gray-01 pl-4">CONNECTION</h4>
                    </div>
                    <p className="text-black">Connect with coaches directly, you can ping coaches to view profile.</p>
                </div>
                <div className="bg-light-purple-02 block2">
                    <div className="flex pb-4">
                    <div className="text-black span">02<hr className="hr-purple-01" /></div>
                    <h4 className="text-gray-01 pl-4">COLLABORATION</h4>
                    </div>
                    <p className="text-black">Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</p>
                </div>
                <div className="bg-purple-02 block3">
                    <div className="flex pb-4">
                    <div className="text-black span">03<hr className="hr-white" /></div>
                    <h4 className="text-gray-01 pl-4">GROWTH</h4>
                    </div>
                    <p className="text-white">Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc</p>
                </div>
              </div>  
              <div className="player">
                <div className="img-container">
                  <img src={window.innerWidth > 1279 ? imgBasDesktop : window.innerWidth > 767 ? imgBasTablet : imgBasMobile} alt="bas-player" className="w-full img-lg" />
                </div>
                <div className="block1">
                  <h2 className="text-gray-02">PLAYERS</h2>
                  <div className="flex pb-4">
                    <div className="text-black span">01<hr className="hr-purple-01" /></div>
                    <h4 className="text-gray-01 pl-4">CONNECTION</h4>
                  </div>
                  <p className="text-black w-39-xl w-50-lg w-50-md">Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.</p>
                </div>
                <div className="bg-light-purple-02 block2">
                  <div className="flex pb-4">
                    <div className="text-black span">02<hr className="hr-purple-01" /></div>
                    <h4 className="text-gray-01 pl-4">COLLABORATION</h4>
                  </div>
                  <p className="text-black w-60-lg w-55-md">Work with recruiter to increase your chances of finding talented athlete.</p>
                </div>
                <div className="bg-dark-purple block3">
                  <div className="flex pb-4">
                    <div className="text-light-purple-01 span">03<hr className="hr-white" /></div>
                    <h4 className="text-gray-01 pl-4">GROWTH</h4>
                  </div>
                  <p className="text-white">Save your time, recruit proper athlets for your team.</p>
                </div>
              </div>
            </React.Fragment>
            :
            <React.Fragment>
              <div className="athlets mb-16">
                <div className="pl-5">
                  <h2 className="text-gray-02 pb-10-md">ATHLETS</h2>
                </div>
                <div className="img-container w-70-sm">
                  <img src={imgFootballMobile} alt="ball-player" className="w-full"/>
                </div>
                <AliceCarousel 
                  mouseTracking items={itemsAthlets} 
                  disableButtonsControls={true} 
                />
              </div>
              <div className="player mt-12">
                <div className="pl-5">
                  <h2 className="text-gray-02 pb-10-md">PLAYERS</h2>
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
    )
}

export default App;