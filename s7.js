const is_even = x => x % 2 === 0;
const square = x => {display(x); return x * x;};

function fast_expt(b, n) {
    return n === 0
           ? 1
           : is_even(n)
           ? square(fast_expt(b, n / 2))
           : b * fast_expt(b, n - 1);
}

function fast_helper(b, n, acc) {
    return n === 0
           ? acc
           : is_even(n)
           ? fast_helper(square(b), n / 2, acc)
           : fast_helper(b, n - 1, acc * b);
}

function fast_expt_iter(b, n) {
    return fast_helper(b, n, 1);
}

function cps_helper(b, n, c) {
   return n === 0
          ?   c(1) 
          :  is_even(n)
          ?   cps_helper(b, n / 2, a => c(square(a)))
          :   cps_helper(b, n - 1, a => c(a * b));                
}

function fast_expt_cps(x, y) {
    return cps_helper(x, y, a => a);
}


// fast_expt_iter(2, 12);
/**
 *  2
 *  4
 *  16
 *  4096
 */

fast_expt(2, 12);
/**
 *  2
 *  8
 *  64
 *  4096
 */

// fast_expt_cps(2, 12);