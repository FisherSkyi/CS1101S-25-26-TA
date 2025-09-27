// // Admin: mastery check
// // Other admin
// // Recap: list

list(
    
    list(
        1, 
        2, 
        list(3)
        ), 
        
    list(4, 5), 
    
    pair(6, 7)
    
    );


draw_data(list(3));

draw_data(list(list(3)));

// // 

// // Q1:
// // box and pointer 
// // box notation
// // list notation
// // 1.1
draw_data(list(list(1, 2, list(3)), list(4, 5), pair(6, 7)));

// // 1.2
draw_data(pair(1, list(2, 3, pair(4, null))));
draw_data(list(1, 2, 3, list(4)));

// // // 1.3
draw_data(pair(1, pair(2, list(3, list(4, 5)))));

// // // 1.4
pair(list(1), list(pair(2, 3), 4, list(5)));

// // // Q2:
function reverse(lst) {
    return is_null(lst)
    ? null
    : list(pair(reverse(tail(lst)), head(lst)));
    // : pair(pair(reverse(tail(lst)), head(lst)), null);
}

// function reverse(lst, reversed) {
//     return is_null(lst) 
//     ? 
//     : pair(, )
// }

// reverse(lst, null);

reverse(list(1, 2, 3, 4));

pair(reverse(list(2,3,4)), 1);

// [[[[null, 4], 3], 2], 1]

// // list(4, 3, 2, 1);

// // Q3:
draw_data(list(7, list(6, 5, 4), 3, list(2, 1)));

draw_data(list(list(7), list(6, 5, 4), list(3, 2), 1));

draw_data(list(7, list(6), list(5, list(4)), list(3, list(2, list(1)))));

draw_data(list(7, list(list(6, 5), list(4), 3, 2), list(list(1))));

tail(head(lst))

// // every_second(list("a", "x", "b", "y", "c", "z", "d"));
// // Value: ["x", ["y", ["z", null]]]


// // const lst = list("a", "x", "b", "y");
// // // list("x", "b");
// // tail(tail(lst));

// // tail(null);
function every_second(lst) {
    return is_null(lst) 
    ? null 
    : is_null(tail(lst)) 
        ? null 
        : pair(head(tail(lst)), every_second(tail(tail(lst))));
}
// pair(head(tail(lst)), every_second(tail(tail(lst))));

// draw_data(pair(1, list(2,3,4)));

function sum(lst) {
    return is_null(lst) 
    ? list(0,0)
    : is_null(tail(lst))
        ? list(head(lst), 0)
        : pair(
            
            head(
                
                sum(
                    tail(tail(lst))
                    )
                    
                ) 
            
            + head(lst),
            
            head(tail(
                
                sum(
                    tail(tail(lst))
                    )
                
                )) 
                
            + head(tail(lst))
            
            );
}



