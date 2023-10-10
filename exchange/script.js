$(document).ready(function(){
    $(".all").hide();
    connectData();

    $(".box1, .box2").click(function() {
        $(this).css({
            "border": "2px solid blue"
        });
    })
    $(".box1, .box2").hover(function () {
        $(this).css({
            "border": "2px solid black"
        });
    },function(){
        $(this).css({
            "border": "2px solid gray"
        });
    })
    
    $("#input1").keyup(function(){
        let input1Value = Number($(this).val());
        
        let select1Value = Number($("#cCode1").val());
        let select2Value = Number($("#cCode2").val());
        let input2Value =  select2Value * (input1Value / select1Value);
        $("#input2").val(input2Value.toFixed(2));


    })
    $("#input2").keyup(function(){
        let input2Value = Number($(this).val());
        
        let select2Value = Number($("#cCode2").val());
        let select1Value = Number($("#cCode1").val());
        let input1Value =  select1Value * (input2Value / select2Value);
        $("#input1").val(input1Value.toFixed(2));


    })
    $("#cCode1").change(function name(params) {
        let select1Value = parseInt(Number($(this).val()));
        let input1Value = parseInt(Number($(input1).val()));
        let select2Value = parseInt(Number($("#cCode2").val()));
        let input2Value = (input1Value / select1Value) * select2Value;
        $("#input2").val(input2Value.toFixed(2));
        
    })
    $("#cCode2").change(function name(params) {
        let select2Value = parseInt(Number($(this).val()));
        let input2Value = parseInt(Number($(input2).val()));
        let select1Value = parseInt(Number($("#cCode1").val()));
        let input1Value = (input2Value / select2Value) * select1Value;
        $("#input1").val(input1Value.toFixed(2));
        
    })
    
});
async function connectData(){
    await fetch("https://v6.exchangerate-api.com/v6/6f56a4776052aacc00988014/latest/USD")
    .then(res => res.json())
    .then(data =>{
        for (const key in data.conversion_rates) {
            $("#cCode1").append(
                `
                <option value="${data.conversion_rates[key]}">${key}</option>
                `
            )
            $("#cCode2").append(
                `
                <option value="${data.conversion_rates[key]}">${key}</option>
                `
            )
            
        }
        

    }).catch(error => console.log(error));
    $(".all").show();
    $(".load").hide();
}
