import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
          style={{height: '400px', width: '100%'}}
            src="https://i.ibb.co/zNqGqNG/bell.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
           style={{height: '400px', width: '100%'}}
            src="https://i.ibb.co/BGgdj4w/ligth-with-horn.jpg"
            className=""
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
           style={{height: '400px', width: '100%'}}
            src="https://i.ibb.co/JmWvq89/looking-glass.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
           style={{height: '400px', width: '100%'}}
            src="https://i.ibb.co/mD42GQ4/metre.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
