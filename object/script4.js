function f(x) {

    x++;

    (x = x - 3) && ++x;

    return x--;

}
console.log(f(2));