import React from "react";
import { Navigate } from 'react-router-dom';

function Our() {

    return (
        <div>

            <div class="container text-center mb-4">
                <div class="row img2">
                    <div class="col-8 col-md-3 ">
                        <h3>FEATURED</h3>
                        <br></br>
                        <a class='a1' href="#"><h4>Men's Shoes</h4></a>
                        <a class='a1' href="#"><h4>Women's Shoes</h4></a>
                        <a class='a1' href="#"><h4>New Arrivals</h4></a>
                    </div>
                    <div class="col-md-9 ">
                        <h1 >New Colors, Next-Gen Comfort</h1>
                        <br></br>
                        <h4>
                            Maximize your comfiness with the Wool Runner 2, now in
                            new hues.
                        </h4>
                        <div class="d-grid gap-2 d-md-flex justify-content-center">
                            <a href="#"><button class="btn btn-lg btn-dark me-md-2" type="button">SHOP MEN</button></a>
                            <a href="#"><button class="btn btn-lg btn-dark" type="button">SHOP WOMEN</button></a>
                        </div>
                    </div>
                </div>

            </div>

            <br />
            <div class="d-flex justify-content-center mb-4 ">
                <h1>Our Favorites</h1>
            </div>
            <div class="d-flex justify-content-evenly">


                <button type="button" class="btn btn-outline-dark">FOR EVERYDAY</button>
                <button type="button" class="btn btn-outline-dark">FOR ACTIVITY</button>
                <button type="button" class="btn btn-outline-dark">FOR THE RAIN</button>


            </div>
            <hr></hr>

            <div class="d-flex justify-content-around">
                <div class="card" style={{ width: 400 }}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_400,b_rgb:f5f5f5/cms/6fDkswpvOc37Fj6Q24eufT/f808be9b9d459db6c940e96e284584f7/23Q3-FallLookbook-Category-Carousel-Tile-TR.jpg.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3>Tree Runner</h3>
                        <hr></hr>
                        <h5><img src="https://www.svgrepo.com/show/530298/leaf.svg" style={{ width: 40 }}></img> Breezy, Everyday Sneaker</h5>
                        <div class="d-flex justify-content-evenly">
                            <button type="button" class="btn btn-outline-warning text-success">ADD A CART</button>
                            <a href="#"> <img src="https://www.svgrepo.com/show/16139/add-to-favorite.svg" style={{ width: 40 }}></img></a>
                        </div>

                    </div>
                </div>
                <div class="card" style={{ width: 400 }}>
                    <a herf='#'>  <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_400,b_rgb:f5f5f5/cms/1LlL6i6F1nxCx37BYIPwZw/f47c8d7ab56457a8384d5bfbe7c0d256/23Q4-WR2-Carousel-Card-1110x1110.jpg" class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h3>Wool Runner 2</h3>
                        <hr></hr>
                        <h5><img src="https://www.svgrepo.com/show/530455/cloud-acceleration.svg" style={{ width: 40 }}></img>Step Into Next-Gen Comfort</h5>
                        <div class="d-flex justify-content-evenly">
                            <button type="button" class="btn btn-outline-warning text-success">ADD A CART</button>
                            <a href="#"> <img src="https://www.svgrepo.com/show/16139/add-to-favorite.svg" style={{ width: 40 }}></img></a>
                        </div>
                    </div>

                </div>
                <div class="card" style={{ width: 400 }}>
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_400,b_rgb:f5f5f5/cms/2YyZ6odVLO86H5yNG0dcJc/d79ec8e08a190b1d9a35e297e08cac7d/23Q3-FallLookbook-Category-Carousel-Tile-Lounger.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3>Wool Lounger</h3>
                        <hr></hr>
                        <h5> <img src="https://www.svgrepo.com/show/529506/cloud-snowfall-minimalistic.svg" style={{ width: 40 }}></img>Cozy Slip-On</h5>
                        <div class="d-flex justify-content-evenly">
                            <button type="button" class="btn btn-outline-warning text-success">ADD A CART</button>
                            <a href="#"> <img src="https://www.svgrepo.com/show/16139/add-to-favorite.svg" style={{ width: 40 }}></img></a>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>

            <div class="d-flex justify-content-around">
                <div><img class="w2" src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1536/cms/6mR3Qbs4ctkbbJbWoeVEM3/9509c55d3d667b2fcb416c43984c2e73/24Q1_Energy_LakeM_Site_Secondary_Hero_Desktop_3841___2346.jpg" /></div>


            </div>
            <br></br>
            <div class="d-flex justify-content-center mb-3">
                <h1>Weather The Storm</h1>
            </div>
            <div class="d-flex justify-content-center mb-3">
                <h6> Wintry mix? No problem. Our super cozy, water-repellent shoes were made to
                    <br></br>
                    keep your feet warm and dry.</h6>
            </div>
            <div class="d-flex justify-content-center mb-3">

                <a href="#"><button class="btn btn-outline-dark me-md-5" type="button">SHOP MEN</button></a>
                <a href="#"><button class="btn  btn-outline-dark " type="button">SHOP WOMEN</button></a>

            </div>
            <br></br>
        </div>
    );
}


export default Our;


