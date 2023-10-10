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
                                                            <div class="inputNum"><input type="number" class="numBox" value="1" id="numBoxId" onfocus="this.oldvalue = this.value;" this.oldvalue = this.value;"></div>
                                                            <div class="delete"><img src="./trash.png" class="trash"></div>
                                                          </div>`
        detail2Arr.push(detail2);

        priceArr.push(price);
        var oneQuantity = Number(document.getElementById("numBoxId").getAttribute("value"));
        quantity.push(oneQuantity);
    } else{
      window.alert("Item already Exists");
    }
    trash(); 
    console.log(quantity);
    changeQuantity();
    console.log(quantity);   
}

function changeQuantity(){
    for (let index = 0; index < quantity.length; index++) {
        document.getElementsByClassName("numBox")[index].addEventListener("change",function (event) {
            if(document.getElementsByClassName("numBox")[index].value > 9){
                document.getElementsByClassName("numBox")[index].setAttribute("onchange", "onChangeTest(this)");
                
                document.getElementsByClassName("numBox")[index].setAttribute("value", document.getElementsByClassName("numBox")[index].oldvalue);  
                quantity[index] = document.getElementsByClassName("numBox")[index].oldvalue;
            }else {
                document.getElementsByClassName("numBox")[index].setAttribute("value", document.getElementsByClassName("numBox")[index].value);
                 quantity[index] = document.getElementsByClassName("numBox")[index].value;   
            }
            console.log(quantity);
        });
       
    }
    // for (let index = 0; index < quantity.length; index++) {
    //     console.log(document.getElementsByClassName("numBox")[index].value);
    //     quantity[index] = document.getElementsByClassName("numBox")[index].value;
        
    // }
    // console.log(quantity);     
}
function trash(){
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
        });
    }
}

         


