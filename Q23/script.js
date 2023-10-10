var detail2Arr = [];
var priceArr = [];
var quantity = [];
var index = 0;

function showCart(obj){
    document.getElementById("cartId").style.display = 'block';
    document.getElementById("cartId").style.animationDuration = '2s';
    var imagePhoto = obj.children[0].children[0].getAttribute("src");
    var detail1 = obj.children[1].children[0].innerHTML;
    var detail2 = obj.children[1].children[1].innerHTML;

    if(!detail2Arr.includes(detail2)){
        var price = Number(obj.children[0].children[1].innerHTML.slice(3));
      
        document.getElementById("calItemId").innerHTML += `<div class="cartItem">
                                                            <div class="image"><img src="`+imagePhoto+ `"class="cartImg"></div>
                                                            <div class="imgDetail"><p>`+detail1+`</p><p>(`+detail2+`)</p></div>
                                                            <div class="inputNum"><input type="number" class="numBox" id="numBoxId" value="1" onfocus="this.oldvalue = this.value;" this.oldvalue = this.value;"></div>
                                                            <div class="delete"><img src="./trash.png" class="trash"></div>
                                                          </div>`
        detail2Arr.push(detail2);
        priceArr.push(price);
        var oneQuantity = Number(document.getElementById("numBoxId").getAttribute("value"));
        quantity.push(oneQuantity);
    } else{
      window.alert("Item already Exists");
    }

    for (let index = 0; index < priceArr.length; index++) {
        document.getElementsByClassName("trash")[index].addEventListener("click",function (event) {
        document.getElementsByClassName("cartItem")[index].style.display = "none"; 
        priceArr.splice(index,1);
        quantity.splice(index,1);
        if(priceArr.length == 0){
            document.getElementById("cartId").style.transition = "all 2s linear";
            document.getElementById("cartId").style.overflow = "hidden";
            document.getElementById("cartId").style.animationName = "dispear";
            document.getElementById("cartId").style.display = 'none';
        }
        var date = new Date();
        var day = date.getDay();
        if((day == 6) || (day == 0)){
            document.getElementById("discounttitle").style.display = "block";
            document.getElementById("discountprice").style.display = "block";
            var totalPrice = 0;
            for (let index = 0; index < priceArr.length; index++) {
                totalPrice += priceArr[index] - (priceArr[index] * 0.15);
            }
        document.getElementById("discountprice").innerHTML = totalPrice + "Ks";
        }else {
            document.getElementById("discounttitle").style.display = "none";
            document.getElementById("discountprice").style.display = "none";
        }  
        var grandTotal = 0;
        if((day == 6) || (day == 0)){
            for (let index = 0; index < quantity.length; index++) {
                grandTotal += Number(priceArr[index]- (priceArr[index] * 0.15)) * Number(quantity[index]);
            }
      
        }else {
            for (let index = 0; index < quantity.length; index++) {
            grandTotal += Number(priceArr[index]) * Number(quantity[index]);
        }
      }  
    
    
      var select = document.getElementById("delivery");
      select.addEventListener("change", function handleChange(event) {
        var delPrice = Number(select.options[select.selectedIndex].value);
        // console.log(delPrice);
      
      document.getElementById("grand").innerHTML = grandTotal + delPrice;
      });
      document.getElementById("grand").innerHTML = grandTotal + Number(select.options[select.selectedIndex].value);
      
      
      
    
    
     var updateTotal = 0;
     console.log(quantity);
    for (let index = 0; index < quantity.length; index++) {
      
      document.getElementsByClassName("numBox")[index].addEventListener("input",function (event) {
       
        if(document.getElementsByClassName("numBox")[index].value > 9){
          
          document.getElementsByClassName("numBox")[index].setAttribute("onchange", "onChangeTest(this)");
          quantity[index] = document.getElementsByClassName("numBox")[index].oldvalue;
          // console.log("old:"+document.getElementsByClassName("numBox")[index].oldvalue);
          // console.log(quantity);
        }else {
          document.getElementsByClassName("numBox")[index].setAttribute("value", document.getElementsByClassName("numBox")[index].value);
          quantity[index] = document.getElementsByClassName("numBox")[index].value;
          console.log(quantity);
        }
        
        
        // console.log(quantity);
        // console.log(index);
          // console.log(priceArr[index]);
          // console.log(quantity[index]);
          if((day == 6) || (day == 0)){
            for (let index = 0; index < quantity.length; index++) {
              updateTotal += Number(priceArr[index]- (priceArr[index] * 0.15)) * Number(quantity[index]);
              // console.log(updateTotal);
              
            }
            
          }else {
            for (let index = 0; index < quantity.length; index++) {
              updateTotal += Number(priceArr[index]) * Number(quantity[index]);
              // console.log(updateTotal);
              
            }
            
          }  
          
          
          var select = document.getElementById("delivery");
      select.addEventListener("change", function handleChange(event) {
        var delPrice = Number(select.options[select.selectedIndex].value);
        // console.log(delPrice);
      
      document.getElementById("grand").innerHTML = updateTotal + delPrice;
      // updateTotal = 0; 
      });
      document.getElementById("grand").innerHTML = updateTotal + Number(select.options[select.selectedIndex].value);
          // updateTotal = 0;
          
      });  
    }
   
      })
      
     }
     
    var date = new Date();
    var day = date.getDay();
    // console.log(day);
    if((day == 6) || (day == 0)){
      document.getElementById("discounttitle").style.display = "block";
      document.getElementById("discountprice").style.display = "block";
      var totalPrice = 0;
      for (let index = 0; index < priceArr.length; index++) {
        totalPrice += priceArr[index] - (priceArr[index] * 0.15);
        
      }
      document.getElementById("discountprice").innerHTML = totalPrice + "Ks";
    }else {
      document.getElementById("discounttitle").style.display = "none";
      document.getElementById("discountprice").style.display = "none";
    }  
    
  
  
  var grandTotal = 0;

    
    if((day == 6) || (day == 0)){
      for (let index = 0; index < quantity.length; index++) {
        grandTotal += Number(priceArr[index]- (priceArr[index] * 0.15)) * Number(quantity[index]);
      }
      
    }else {
      for (let index = 0; index < quantity.length; index++) {
        grandTotal += Number(priceArr[index]) * Number(quantity[index]);
      }
      
    }  
    
    
      var select = document.getElementById("delivery");
      select.addEventListener("change", function handleChange(event) {
        var delPrice = Number(select.options[select.selectedIndex].value);
        // console.log(delPrice);
      
      document.getElementById("grand").innerHTML = grandTotal + delPrice;
      });
      document.getElementById("grand").innerHTML = grandTotal + Number(select.options[select.selectedIndex].value);
      
      
      
    
    
     var updateTotal = 0;
     console.log(quantity);
    for (let index = 0; index < quantity.length; index++) {
      
      document.getElementsByClassName("numBox")[index].addEventListener("input",function (event) {
        
        if(document.getElementsByClassName("numBox")[index].value > 9){
        
          document.getElementsByClassName("numBox")[index].setAttribute("onchange", "onChangeTest(this)");
          quantity[index] = document.getElementsByClassName("numBox")[index].oldvalue;
          // console.log("old:"+document.getElementsByClassName("numBox")[index].oldvalue);
          // console.log(quantity);
        }else {
          document.getElementsByClassName("numBox")[index].setAttribute("value", document.getElementsByClassName("numBox")[index].value);
          quantity[index] = document.getElementsByClassName("numBox")[index].value;
          // console.log(quantity);
        }
        
        // console.log(index);
          // console.log(priceArr[index]);
          // console.log(quantity[index]);
          if((day == 6) || (day == 0)){
            for (let index = 0; index < quantity.length; index++) {
              updateTotal += Number(priceArr[index]- (priceArr[index] * 0.15)) * Number(quantity[index]);
              // console.log(updateTotal);
              
            }
            
          }else {
            for (let index = 0; index < quantity.length; index++) {
              updateTotal += Number(priceArr[index]) * Number(quantity[index]);
              // console.log(updateTotal);
              
            }
            
          }  
          
          
          var select = document.getElementById("delivery");
      select.addEventListener("change", function handleChange(event) {
        var delPrice = Number(select.options[select.selectedIndex].value);
        // console.log(delPrice);
      
      document.getElementById("grand").innerHTML = updateTotal + delPrice;
      // updateTotal = 0; 
      });
      document.getElementById("grand").innerHTML = updateTotal + Number(select.options[select.selectedIndex].value);
          // updateTotal = 0;
          
      });  
    }
   
   
}
function order(){
  document.getElementById("orderdetail").innerHTML = `<p>Thank You `+document.getElementById("yourname").value+  `</p>
  <p>We received your order!</p>
  <p>We will Deliver to your place at `+document.getElementById("address").value+`</p>
  <p>Before delivery, we will inform to you Phone `+document.getElementById("phone").value+`</p>`;
}
function onChangeTest(textbox) {
  window.alert("Allow 1 to 9!");
  // console.log(textbox);
  textbox.value = textbox.oldvalue; 
}

