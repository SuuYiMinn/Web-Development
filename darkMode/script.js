$(document).ready(function(){
    let mode = localStorage.getItem("mode");
    (mode == "0") ? dark() : light();

    $("#check").click(function(){
        if ($("#check").is(":checked")){
           dark();
            localStorage.setItem("mode","0");
        }else{
            light();
            localStorage.setItem("mode","1");
        }  
    })  
    $("#btn").click(function(){
        localStorage.setItem("job",$("#job").val());
        localStorage.setItem("fb",$("#fb").val());
        localStorage.setItem("instagram",$("#instagram").val());
        localStorage.setItem("language",$("#language").val());
        localStorage.setItem("address",$("#address").val());
    })
    
})
function dark(){
    $("body").css("backgroundColor", "black");
    $("#light").css("display","block");
    $("#dark").css("display","none");
    $(".back").css("backgroundColor","white");
    $(".card").css("backgroundColor","skyblue");
    $(".input").css("backgroundColor","black");
    $(".input").css("color","white");
    $(".dev").css("color","white");
    setValue();

}
function light(){
    $("body").css("backgroundColor","white");
    $("#dark").css("display","block");
    $("#light").css("display","none");
    $(".back").css("backgroundColor","black");
    $(".card").css("backgroundColor","coral");
    $(".input").css("backgroundColor","white");
    $(".input").css("color","black");
    $(".dev").css("color","black");
    setValue();

}
function setValue(){
    let job = localStorage.getItem("job");
    let fb = localStorage.getItem("fb");
    let instagram = localStorage.getItem("instagram");
    let language = localStorage.getItem("language");
    let address = localStorage.getItem("address");
    $("#job").val(job);
    $("#fb").val(fb);
    $("#instagram").val(instagram);
    $("#language").val(language);
    $("#address").val(address);

}