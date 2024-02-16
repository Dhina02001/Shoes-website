import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import New from './PAGES/Page1';
import Shop from './PAGES/Page3';
import Our from './PAGES/Page2';
import LOGIN from './PAGES/Page5';
import Approach from './PAGES/Page4';
import CART from './PAGES/Page6';
import Wishlist from './PAGES/Page7';
import Register from './PAGES/Page8';
function App() {
  return (
    <div>
      <header>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid ">
            <div class="container-fluid-start">
              {/* <Link class='a1 me-5 ' to='/LOGIN'><img src='https://cdn-icons-png.flaticon.com/128/7856/7856126.png' style={{ width: 30 }} /></Link> */}
              <Link class='a1 me-5 ' to='/LOGIN'><img src='https://www.svgrepo.com/show/331468/login.svg' style={{ width: 30 }} /></Link>
              <Link class='a1  ' to='/Register'><img src='https://cdn-icons-png.flaticon.com/128/1144/1144709.png' style={{ width: 30 }} /></Link>
            </div>
            <form class="d-flex" role="search">
              <Link class='a1 me-5' to='/Our'><h6>Our Favorites</h6></Link>
              <Link class='a1 me-5' to='/New '><h6>New Arrivals</h6></Link>
              <Link class='a1 me-5' to='/Shop'><h6>Shop The Collections</h6></Link>
              <Link class='a1 me-5' to='/Approach'><h6>Approach</h6></Link>
              <Link class='a1 me-5' to='/CART'><img src='https://cdn-icons-png.flaticon.com/128/5735/5735325.png' style={{ width: 25 }}></img></Link>
              <Link class='a1 me-5' to='/Wishlist'><img src='https://cdn-icons-png.flaticon.com/128/5160/5160642.png' style={{ width: 25 }}></img></Link>
            </form>
          </div>
        </nav>
        <Routes>
          <Route path='/LOGIN' element={<LOGIN />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/New' element={<New />} />
          <Route path='/Our' element={<Our />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Approach' element={<Approach />} />
          <Route path='/CART' element={< CART />} />
          <Route path='/Wishlist' element={<Wishlist />} />
        </Routes>
      </header>
      <div class="container text-center">
        <div class="row align-items-end">
          <div class="col">
            <footer class="py-5">
              <div class="row">
                <div class="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                  </ul>
                </div>
                <div class="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                  </ul>
                </div>
                <div class="col-6 col-md-2 mb-3">
                  <h5>Section</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                  </ul>
                </div>
                <div class="col-md-5 offset-md-1 mb-3">
                  <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                      <label for="newsletter1" class="visually-hidden">Email address</label>
                      <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                      <button class="btn btn-primary" type="button">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-1 border-top">
                <p>&copy; 2023 Company, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"></svg>
                    <img width="24" height="24" src='https://cdn-icons-png.flaticon.com/128/1384/1384063.png' />
                  </a></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"></svg>
                    <img width="24" height="24" src='https://cdn-icons-png.flaticon.com/128/3670/3670151.png' />
                  </a></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"></svg>
                    <img width="24" height="24" src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png' />
                  </a></li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;



