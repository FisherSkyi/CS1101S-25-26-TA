// const my_exp = list("!", 
//                     list("&&",
//                          list("||", true, false),
//                          list("&&", true, false)));

// function eval_boolean(exp) {
//     return is_boolean(exp) 
//            ? exp
//            : head(exp) === "&&" 
//            ? eval_boolean(list_ref(exp, 1))
//              &&
//              eval_boolean(list_ref(exp, 2)) 
//            : head(exp) === "||" 
//            ? eval_boolean(list_ref(exp, 1))
//              ||
//              eval_boolean(list_ref(exp, 2)) 
//            : head(exp) === "!" 
//            ? ! eval_boolean(list_ref(exp, 1))
//            : error("unknown expression");
// }

// eval_boolean(my_exp);

// Using JavaScript arrays instead of Source lists
const my_exp = 
            ["!", 
                ["&&",
                 ["||", true, false],
                 ["&&", true, false]
                ]
            ];

// !((T||F)&&(T&&F)) => T

function eval_boolean(exp) {
    return typeof exp === "boolean"
           ? exp
           : exp[0] === "&&" 
           ? eval_boolean(exp[1]) && eval_boolean(exp[2]) // note here mimic lazy evaluation
           : exp[0] === "||" 
           ? eval_boolean(exp[1]) || eval_boolean(exp[2])
           : exp[0] === "!" 
           ? !eval_boolean(exp[1])
           : (() => { throw new Error("unknown expression"); })();
}

console.log(eval_boolean(my_exp));