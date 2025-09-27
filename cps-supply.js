// Helper functions to make this legal JavaScript
function pair(x, y) {
    return [x, y];
}

function head(xs) {
    return xs[0];
}

function tail(xs) {
    return xs[1];
}

function is_null(xs) {
    return xs === null;
}

function app(current_xs, ys, c) {
    return is_null(current_xs) 
    ? c(ys) 
    : app(
            tail(current_xs), 
            ys, 
            x => c(pair(head(current_xs), x)));
}

function append_iter(xs, ys) {
    return app(xs, ys, x => x);
}

// Helper function to display lists properly
function display_list(xs) {
    if (is_null(xs)) {
        return "null";
    } else {
        return "[" + head(xs) + ", " + display_list(tail(xs)) + "]";
    }
}

// Example usage:
const list1 = pair(1, pair(2, pair(3, null)));
const list2 = pair(4, pair(5, null));
// append(list1, list2, result => console.log(result));
lst = append_iter(list1, list2);
console.log("Raw output:", lst);
console.log("Formatted output:", display_list(lst));