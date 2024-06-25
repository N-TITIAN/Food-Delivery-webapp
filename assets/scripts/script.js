const resturants = [
  {
    img: 'src="assets/images/10.png" alt="food"',
    resLogo: 'src="assets/images/Restaruant Logo.png" alt="logo"',
  },
  {
    img: 'src="assets/images/11.png" alt="food"',
    resLogo: 'src="assets/images/Restaruant Logo-1.png" alt="logo"',
  },
  {
    img: 'src="assets/images/12.png" alt="food"',
    resLogo: 'src="assets/images/Restaruant Logo-2.png" alt="logo"',
  },
  {
    img: 'src="assets/images/13.png" alt="food"',
    resLogo: 'src="assets/images/Restaruant Logo-3.png" alt="logo"',
  },
  {
    img: 'src="assets/images/14.png" alt="food"',
    resLogo: 'src="assets/images/Restaruant Logo-4.png" alt="logo"',
  },
  {
    img: 'src="assets/images/15.png" alt="food"',
    resLogo: 'src="assets/images/Restaruant Logo-5.png" alt="logo"',
  },
  {
    img: 'src="assets/images/16.png" alt="food"',
    resLogo: 'src="assets/images/Restaruant Logo-6.png" alt="logo"',
  },
  {
    img: 'src="assets/images/17.png" alt="food"',
    resLogo: 'src="assets/images/Image.png" alt="logo"',
  },
];
resturants.forEach((resturant) => {
  var div = document.getElementsByClassName("#resturant-card");
//   alert(resturant.img);
  div.innerHTML =
    div.innerHTML +
    `
    <div class="resturant-card">
            <div class="resturant-card-top">
                ${resturant.img}
                <div class="badge">
                    <div class="discount">
                        <i class="fa fa-tag"></i>
                        <span>
                        <p>20%</p>
                        <p>Off</p>
                        </span>
                    </div>
                    <div class="fast">
                        <i class='far fa-clock'></i>
                        <p>Fast</p>
                    </div>
                </div>
            </div>
            <div class="name-review">
                ${resturant.resLogo}
                <div class="name-rate">
                    <p>FoodWord</p>
                    <div>
                        <span class="fa fa-star checked " style="color: orange;"></span>
                        <p>46</p>
                    </div>
                </div>
            </div>
            <div class="resturant-tag-inactive">
               <p> Opens Tomorrow</p>
            </div>
        </div>
    `;
});
