let days =document.getElementsByClassName("day");

    var yearArray = [];
    var monthArray = [];
    var dayArray =[];



function calendarShow(year,month){
    var year = Number(document.getElementById("yearinput").value);
    var month = Number(document.getElementById("monthinput").value);
    var current = new Date(year,month-1);
    current.setDate(1);
   
    let startDate = current.getDay();
    let countDate = 1;
    current.setMonth(current.getMonth()+1);
    current.setDate(0);
    let endDate = current.getDate();


    for (let index = 0; index < startDate ; index++) {
        days[index].innerText = "";  
    }
    for (let index = startDate; index < 35; index++) {
            
        if(countDate <= endDate){
            days[index].innerText = countDate++;
            
            if(dayArray.includes(countDate) &&
            monthArray.includes(month) &&
            yearArray.includes(year)){
                days[index+1].style.backgroundColor ="yellow";
            }
            else{
                days[index+1].style.backgroundColor ="white";
            }
            
        }
    }

}
function addHoliday(){

    
    var hDate = document.getElementById("date").value;
    
    var dateArray = hDate.split("-");
    var year = dateArray[0];
    var month = dateArray[1];
    var day = dateArray[2];
    yearArray.push(Number(year));
    monthArray.push(Number(month));
    dayArray.push(Number(day));   
}

