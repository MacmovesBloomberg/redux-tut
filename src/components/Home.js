import React from "react";

function Home() {
  return (
    <div>
    <div className="add-to-cart">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsP8geX9g7l6KzvuTB4rFKaDo4Ap50YOmlag&usqp=CAU" />
    
    </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.pngitem.com/pimgs/m/69-699264_iphone-home-screen-hd-png-download.png" />
        </div>
        <div className="text-wrapper item">
        <span>I-Phone</span>
        <span>Price: $1000.00</span>
         </div>
        <div className="btn-wrapper item">
        <button>Add to cart</button>
          </div>
      </div>
    </div>
  );
}

export default Home;
