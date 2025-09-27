// higher order function

function compose(f, g) {
    return x => f(g(x));
}

// also a higher order function, just not return a function
function repeat_pattern(n, p, x) {
    return n === 0 ? x : p(repeat_pattern(n-1, p, x));
}

function repeat(f, n) {
    return n === 0 ? x => x : compose(f, repeat(f, n-1));
}

repeat_pattern(3, x => x * x, 2);

// function thrice(f) {
//     return compose(compose(f, f), f);
// }

// const square = x => x * x;

// ((thrice(thrice))(square))(2);

// (thrice((thrice)(square)))(2); // should be of 155 digits in decimal

