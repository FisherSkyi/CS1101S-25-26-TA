// Q1

function ppair(x, y) {
    display("here");
    return pair(x, y);
}

function stream_map(f, s) {
  return is_null(s) 
         ? null 
         : ppair(f(head(s)), () => stream_map(f, stream_tail(s)));
}

function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}

function integers_from(n) {
    return ppair(n, () => integers_from(n + 1));
}

function mul_streams(a, b) { 
    return ppair(head(a) * head(b),
                  () => mul_streams(stream_tail(a), stream_tail(b)));
}
const integers = integers_from(1);
const A = scale_stream(10, integers);
head(stream_tail(stream_tail(A)));

// In the first case, two pairs get created.
// The first additional line will create two more pairs in integers_from and two more pairs in
// stream_map, so altogether six.
// The second additional line will create ten more pairs in integers_from and ten more pairs
// in stream_map, so altogether 22.

// Q2

// const integers = integers_from(1);
const B = mul_streams(integers, integers);
head(stream_tail(stream_tail(B)));

// The program constructs two pairs: one for integers and one for B.
// With the first additional line, we get two more pairs for B and for each argument integer
// two more pairs, so altogether six plus two equals eight pairs.
// Note that the function mul_streams calls stream_tail separately on each of its argument
// streams.


// Q3

// Q4