// A node has a value and a pointer to next
function Node(value, next = null) {
    return {
        value: value,
        next: next
    };
}

// Build a list: 1 -> 2 -> 3 -> null
// const list = Node(1, Node(2, Node(3)));

// Traverse the list
function listToString(node) {
    let parts = [];
    while (node !== null) {
        // console.log(node.value);
        parts.push("[" + node.value.toString() + "]");
        node = node.next;
    }
    parts.push("[/]")
    return parts.join("->")
}

// printList(list);
// Output: 1 2 3

// console.log(listToString(list));

function head(node) {
    return node.value;
}

function tail(node) {
    return node.next;
}