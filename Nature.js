import React from 'react';

const blue_nyc_view = {
  src: 'https://github.com/giffiecode/pw/blob/main/photography/blue2.JPG',
  alt: 'Blue Hour of NYC',
  width:  '200px'
};

function Nature(){
    return (
      <div>
        <h1>Blue Series</h1>
        <img 
          src={blue_nyc_view.src}
          alt={blue_nyc_view.alt}
          width={blue_nyc_view.width} />
      </div>
    );
}
export default Nature;