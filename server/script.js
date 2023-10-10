$(document).ready(function(){
    fetch("http://localhost:3001/getdata")
    .then(res => res.json())
    .then(data => {
        let stbd = data.body.style;
        $("body").attr("style",stbd);
        $("body").append(`<`+data.body.child[0].element+` id="fdiv"></`+data.body.child[0].element+`>`);
        let stch = data.body.child[0].style;
        $(data.body.child[0].element).attr("style",stch);
        let nextch = data.body.child[0].child;    
        var id = 0;
        for (let index = 0; index < nextch.length; index++) {
           $("#fdiv").append(`<`+nextch[index].element+` id="div`+index+`"></`+nextch[index].element+`>`);
           $("#div"+index).attr("style",nextch[index].style);
            for (let index1 = 0; index1 < nextch[index].child.length; index1++) {
                var fObj = nextch[index].child[index1];
                $("#div"+index).append(`<`+fObj.element+` id="ch`+id+`"></`+fObj.element+`>`);
                $("#ch"+id).attr("style",fObj.style);
                $("#ch"+id).attr("src",fObj.src);
                $("#ch"+id).text(fObj.text);
                if(fObj.hasOwnProperty('child')){
                    for (let index2 = 0; index2 < fObj.child.length; index2++) {
                        var secObj = fObj.child[index2];
                        $("#ch"+id).append(`<`+secObj.element+` id="secch`+id+`"></`+secObj.element+`>`);
                        $("#secch"+id).attr("style",secObj.style);
                        $("#secch"+id).text(secObj.text);    
                    }
                } 
                id++;
            }
        }       
        })
    .catch(err => console.log(err));
})