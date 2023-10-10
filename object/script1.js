let allexam =
[
    [{classid: 1,rank: 3}],

    [{classid: 1,rank: 5}],

    [{classid: 2,rank: 1}],

    [{classid: 2,rank: 6}],
    
    [{classid: 3,rank: 1}],

    [{ classid: 4, rank: 1}]
];
/*let allexam = 

[[{classid: 1,rank: 3}],

[{classid: 2,rank: 1}],

[{classid: 3,rank: 1}],

[{classid: 3,rank: 3}],

[{classid: 3,rank: 2}]];*/


let result = [];
       for (let x = 0; x <= allexam.length +1; x++) {
            var sameIdArr = [];
            
            let first = allexam[0][0].classid;
            sameIdArr[0] = allexam[0][0];
            //console.log(sameIdArr);
            
            allexam.splice(0,1);
            //console.log(allexam) ;
            if(allexam.length>0){
                var second = allexam[0][0].classid;
            }
            for (let index = 0; index < allexam.length; index++) {
                
                if(first == second){
                    sameIdArr[index+1] = allexam[0][0];
                    
                    allexam.splice(0,1);
                    second = allexam[0][0].classid;
                    if((allexam.length == 1) && (first == second)) {
                        sameIdArr[index+2] = allexam[0][0];
                        allexam.splice(0,1);
                    }
                }else{
                    second = allexam[index][0].classid;

                }  
            }
            
            result.push(sameIdArr);
            if(allexam.length == 1) {
                result.push(allexam[0]);
            }
        }
        console.log(result);
       
/*Output 1

    [
        [{classid: 1,rank: 3},{classid: 1,rank: 5}],

        [{classid: 2,rank: 1},{classid: 2,rank: 6}],

        [{classid: 3,rank: 1}]
    ]*/
//output 2

// [[{classid: 1,rank: 3}],[{classid: 2,rank: 1}],

//[{classid: 3,rank: 1},{classid: 3,rank: 3},{classid: 3,rank: 2}]]





