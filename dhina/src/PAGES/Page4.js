import React from "react";
function Approach() {
  return (
    <div>
      <br />
      <h1 class='p-2'>Allbirds Sustainability Initiatives</h1>

      <div class="d-flex justify-content-around">

        <div class="card" style={{ width: 470 }}>
          <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1200/cms/3jHkBKuH6mrz0IUGG7KqtQ/4d8f22cd6fbce8b57afda046623dc08c/ReRun-Site-Landing-Page-v3-1200px.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5>Women's SuperLight Tree Runners</h5>
            <p>
              Allbirds ReRun™ is a marketplace where you can shop slightly imperfect and gently used products, extending their life and lowering our impact on the planet. Allbirds has partnered with Trove, a company that specializes in circular commerce, to run Allbirds ReRun™ on our behalf.
            </p>
          </div>
        </div>
        <div class="card" style={{ width: 470 }}>
          <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/cms/30RmXxAI0S4zAIU86xZIO4/875dfe493dd8a165ae3fa24308441df4/Allbirds_founder_portrait_2_1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5>And not for nothing, we're on track. </h5>
            <p>
              Only two years in, we're more than 60% of the way towards our goals for 2025. in 2022, we reduced our average product carbon footprint by 19% compared to 2021. Which might not seem like much, but here’s the thing: this is a game of inches and we’re big on near term, tangible progress. It’s just one small part—okay, big part— of our mission to reverse climate change through better business.
            </p>
          </div>

        </div>
        <div class="card" style={{ width: 470 }}>
          <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/cms/v8XWwh4K3Mer3ysAIpcm7/12a38eac5b14202d281e84f3c6c6ec39/ezgif.com-optimize.gif" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5>MOTHER NATURE
              MADE US DO IT</h5>
            <p>
              After years of researching and tinkering, Tim teamed up with Joey Zwillinger, an engineer and renewables expert. Together, they crafted a revolutionary wool fabric made specifically for footwear. The outcome? An entirely new category of shoes inspired by natural materials, and an ongoing mantra to create better things in a better way.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div class="d-flex justify-content-center mb-3">
        <h1>Want First Dibs?</h1>
      </div>
      <div class="d-flex justify-content-center mb-3">
        <h6>Join our email list and be the first to know about new limited edition products, material innovations,
          <br /> and lots of other fun updates.</h6>
      </div>
      <div class="container text-center w-50">
        <div class="d-flex flex-column flex-lg-row  gap-2">
          <label for="newsletter1" class="visually-hidden">Email address</label>
          <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
          <button class="btn btn-primary" type="button">Subscribe</button>
        </div>
      </div>
      <br />
      <div class="d-flex justify-content-center mb-3">
        <p>Note: You can opt-out at any time. See our<b>Privacy Policy</b> and <b>Terms</b>.</p>
      </div>
      <br></br>
      <h1 class='p-2'>The Allbirds Approach</h1>

      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col">
            <h3>Wear-All-Day Comfort
            </h3>
            <p>Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.</p>
            <a href="#">Learn More</a>
          </div>
          <div class="col">
            <h3>Sustainability In Every Step</h3>
            <p>From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.</p>
            <a href="#">Learn More</a>
          </div>
          <div class="col">
            <h3>Materials From The Earth</h3>
            <p>We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugar cane. They’re soft, breathable, and better for the planet—win, win, win.</p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
      <br />
      <hr></hr>
    </div>
  );
}
export default Approach;