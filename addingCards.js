let cards_division = document.getElementById("cards-division");
let img_url_user = "images/cardimg-1.png",
    address = "DK, san Jose, south Dakota",
    sellerName = "Robert Fox";
for (let card_box = 1; card_box <= 2; card_box++) {
    let div1 = document.createElement('div');
    div1.classList.add('carousel-item');
    if(card_box===1) div1.classList.add('active');
    let div2 = document.createElement('div');
    div2.classList.add('row');
    for (let cards = 1; cards <= 4; cards++) {
        let img_number = (cards === 4) ? 2 : cards;
        let img_url = `images/section2-card-${img_number}.png`;
        let inHtml = 
        `<div class="col-lg-3 col-md-6 col-sm-12  d-flex justify-content-center">
        <div class="card border-0 section2-responsive-img">
            <img src=${img_url} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Roselands House</h5>
                <p class="card-text opacity-75">$ 35.000.000</p>
            </div>
            <div class="sect2-card-img d-flex align-items-center">
                <div class="sect2-card-img">
                    <img src=${img_url_user} alt="" width="70px">
                </div>
                <div class="sect2-card-text">
                    <h5 style="font-size: 12px; font-weight: bolder;">${sellerName}</h5>
                    <p style="font-size: 10px;opacity: 0.8;">${address}</p>
                </div>
        
            </div>
        </div>
        </div>`;
        div2.innerHTML += inHtml;
    }
    div1.appendChild(div2);
    cards_division.appendChild(div1);
}