const products = [
    {
      pName: 'Adicolor 2-Stripes',
      pDes: "Men's Originals",
      pGender: 2,
      pColor: ['#23ef45', '#262A56', '#B8621B'],
      pCategory: 'Sale',
      pPrice: 30000,
      pDiscount: 5,
      pRate: 4.5,
      pCode: 'M101',
      pLsize: true,
      pMsize: true,
      pSsize: false,
      pStock: 10,
      pPhoto: 'M101.jpg',
    },
    {
      pName: 'Fresh Stretch Oxford Shirt',
      pDes: "Men's Fresh Stretch Oxford Shirt",
      pGender: 1,
      pColor: ['#060047', '#B3005E', '#FF5F9E'],
      pCategory: 'New',
      pPrice: 100000,
      pDiscount: 2,
      pRate: 3.8,
      pCode: 'M102',
      pLsize: true,
      pMsize: true,
      pSsize: true,
      pStock: 14,
      pPhoto: 'M102.jpg',
    },
    {
      pName: 'Printed Tee',
      pDes: "Women's Altitude Printed Tee",
      pGender: 2,
      pColor: ['#C0EEE4', '#FFCAC8'],
      pCategory: 'Popular',
      pPrice: 25000,
      pDiscount: 7,
      pRate: 5,
      pCode: 'M103',
      pLsize: false,
      pMsize: false,
      pSsize: true,
      pStock: 20,
      pPhoto: 'M103.jpg',
    },
    {
      pName: 'BASKETBALL TREFOIL JERSEY',
      pDes: "Men's BASKETBALL TREFOIL JERSEY",
      pGender: 1,
      pColor: ['#2192FF', '#9CFF2E', '#FDFF00', '#38E54D'],
      pCategory: 'Sale',
      pPrice: 40000,
      pDiscount: 20,
      pRate: 3.5,
      pCode: 'M104',
      pLsize: false,
      pMsize: true,
      pSsize: false,
      pStock: 5,
      pPhoto: 'M104.jpg',
    }
  ];
  for (const value of products) {
    var gender =""
   if(value.pGender == 1){
      gender ="M";
    }else if(value.pGender == 2){
      gender="F";
    }else{
      gender="Both";
    }

    var circlesColor = ``;
    var colorArr = value.pColor;
    for (let index = 0; index < colorArr.length; index++) {
    var color = colorArr[index];
    
    circlesColor += `<div class="first" id="firstid" style ="background-color: ${color};"></div>`;
     
    }
    
     var category = value.pCategory;
     var rate = value.pRate;
     var stock = value.pStock;

      var lsize;
      var msize;
      var ssize;
     if(value.pLsize){
      lsize = 700;
     }else{
      lsize = 0;
     }
     if(value.pMsize){
      msize = 700;
     }else{
      msize = 0;
     }
     if(value.pSsize){
      ssize = 700;
     }else{
      ssize = 0;
     }
     var price = value.pPrice;
     var discount =value.pDiscount;
     var disPrice = price - (price * discount/100);
   
    document.getElementById("main").innerHTML +=
    `
    <div class="card">
    <div class="gender" id="genderid">${gender}</div>
    <img src="${value.pPhoto}" class="clothes" id="clothesid">
    <div class="mgp">
    <div class="firstline">
        <h5>${value.pName}</h5>
        <button>${category}</button>
        <div class="stargp">
          <img src="Star.png" class="star" width="100%">
          <p class="point">${rate}</p>
        </div>
        
    </div>
    
    <p class="subtitle">${value.pDes}</p>
    
    <div class="secondline">
        <div class="circles" id="circlesid">
            ${circlesColor}
        </div>
        <div class="size">
            <div class="large" style="font-weight: ${lsize}">L</div>
            <div class="medium" style="font-weight: ${msize}">M</div>
            <div class="small" style="font-weight: ${ssize}">S</div>

        </div>
        <div class="left">${stock} lefts</div>
    </div>
    <div class="thirdline">
        <p class="origin">${price} MMK</p>
        <p>${disPrice}MMK</p>
        <p>(${discount}% off)</p>
    </div>
    </div>
   
    
</div>
`
}