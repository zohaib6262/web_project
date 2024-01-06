let sect3 = document.getElementById("section-3");

let tour_address = "DK, san Jose, south Dakota",
  tour_Bedrooms = 4,
  tour_Carport = 1,
  tour_floors = 2,
  tour_Bathrooms = 4,
  tour_sellerName = "Robert Fox";

let html = `<div class="row">
<div class=" sect3-width col-md-5 ">
    <div class="section3-top d-flex mt-5">
        <div class="line2 " style="position:relative ;">
            <img class="vector-line" style="position: absolute;left: -62%;top: 32%;"
                src="images/vector line img.png" alt="">
            <h6 style="font-size: 9px;color: orange;">Ready To Sell!</h6>
        </div>
    </div>
    <h2 class="mt-3">Let's tour and see our house!</h2>
    <p style="color: gray;padding-top: 10px;">Houses recommended by our partners that have been
        curated to become the home of your dreams!
    </p>
    <div class="row">
        <div class="col">
            <h5 style="color: gray;">House Detail</h5>
            <div class="row pt-2">
                <div class="col-6">
                    <h5 style="color: gray;"> <i class="fa-solid fa-bed "
                            style="padding-right: 10px;"></i> ${tour_Bedrooms} Bedrooms</h5>
                    <h5 style="color: gray;"><i class="fa-solid fa-car mt-3"
                            style="padding-right: 10px;"></i> ${tour_Carport} Carport</h5>
                </div>
                <div class="col-6 ">
                    <h5 style="color: gray;"><i class="fa-solid fa-toilet"
                            style="padding-right: 10px;"></i>${tour_Bathrooms} Bathroom</h5>
                    <h5 style="color: gray;"><i class="fa-solid fa-stairs mt-3"
                            style="padding-right: 10px;"></i>${tour_floors} floor</h5>
                </div>
                <div
                    style="border: 1px solid gray;width: 80%; margin-left: 20px;margin-top: 20px;margin-bottom: 10px;">
                </div>
            </div>
        </div>
    </div>
    <div class="sect3-card-img d-flex flex-wrap mb-3 align-items-center">
        <div class="sect3-card-img">
            <img src="images/cardimg-1.png" alt="" width="120px">
        </div>
        <div class="sect3-card-text">
            <h6>${tour_sellerName}</h6>
            <p>${tour_address}</p>
        </div>
        <button class="btn btn-outline-primary rounded-pill mx-5" type="submit"
        data-bs-toggle="modal"
        data-bs-target="#seller-contact-card"
        style="white-space: nowrap;">
            Contact
            <i class="fa-solid fa-phone"></i> 
        </button>

    </div>
</div>
<div class="sect3-hidden col-md-6 offset-1 section3-img d-flex align-items-end px-0 mx-0" style="position: relative !important;">
                    <div class="d-flex h-75 justify-content-between align-items-end flex-wrap w-100" id="sect3-imges">
                        <img class="section3-img1" style="order: 2;"
                            src="images/section3 img2.png" alt="">
                        <img class="section3-img2" style="order: 3;"
                            src="images/section3 img3.png" alt="">
                        <img class="section3-img2" style="order: 4;"
                            src="images/section3 img4.png" alt="">
                    </div>
</div>

</div>
</div>`;

let contacts = new Array(3);
contacts[0] = "+123456789";
contacts[1] = "name@email.com";
contacts[2] = tour_address;
document.getElementById("contactCard-phoneNumber").innerHTML = contacts[0];
document.getElementById("contactCard-Email").innerHTML = contacts[1];
document.getElementById("contactCard-Address").innerHTML = contacts[2];

sect3.innerHTML = html;

let a = document.getElementById("sect3-imges").childNodes;
for (const a1 of a) {
  a1.addEventListener("click", (e) => {
    document.querySelector(".section3-img1").classList.add("section3-img2");
    document.querySelector(".section3-img1").classList.remove("section3-img1");
    if (e.target.classList.contains("section3-img2")) {
      e.target.classList.remove("section3-img2");
      e.target.classList.add("section3-img1");
    }
  });
}
