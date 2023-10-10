/*Write  the Regular expression for the following gmail Check.
True
====
mgmg@gmail.com
john@gmail.mm
koko@gtalk.mm
aung@google.com
False
====
a@twitter.org
koko@gtalk.org
mary.aung@facebook.com*/
function check(abc){
    let char = abc;
    let result = char.match(/.*@g.*m/g);
    if(result){
        return true;
    }
    else{
        return false;
    }
}

console.log(check("mgmg@gmail.com"));