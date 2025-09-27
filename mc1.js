// mastery check
// Scope
// name declarations and name occurrences
// four kinds of declarations: 
// pre-declareds, const, fn params, fn name (e.g. function f() {...})

const a = 2;
if (true) {
    const a = 3;
    display(a);
} else {
    const b = 2;
}
display(a);

// higher-order function
// If f refers to a function, what is the difference between g(f) and g(f(2))?
// If f refers to a function, what is the difference between return f; and return f(2); ?
// How can you transform a function declaration into a constant declaration?


// Substitution model/iterative/recursive:
// Does this program perform any addition? Answer is no.
function f(g) {
    return 4; 
} 

f(x => 1 + 2);

// If a program gives rise to a recursive process, 
// can you transform it into a program that gives rise to an iterative process by switching the operands of additions? Answer is no.

// Can switching the operands of additions reduce the number of deferred operations? Answer is yes. Give an example. 
