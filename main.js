// Hoisting

// function foo(){
//     var x = function(){
//         console.log('x');
//     }
//     x();
//     var x = function(){
//         console.log('x2');
//     }
//     function x(){
//         console.log('x3');
//     }
// }
// foo();

// function foo(){
//     function x(){
//         console.log('x3');
//     }
//     var x = function(){
//         console.log('x');
//     }
//     x();
//     var x = function(){
//         console.log('x2');
//     }

// }



// function foo(){
//     function too(){
//         return 'too';
//     }
//     var too;
//     return too();
//     return too();
// }
// foo();


// var x =20;
// (function(){
//     var x=10;
//     function ff(){

//     }
//     ff();
// })();


// (function(){
//     var x=12;
// })();



// Scopes

// G
var x=10;

// L
function check(){
    var y=10;
}

// Block
if(1==1){
    let m =15;
}


// Lexical sc
function ckeckFullName(){
    function checkFName(){
        var fName ='mohamed';
    }
    return fName;
}
ckeckFullName()





///////// Tasks ////////////


// what's the Output?

// Task-1

// function foo(){
//     var x = 10;
//     return x();
//     function x(){
//         return x;
//     }
// }
// foo()



// Task-1

var x =20;
function foo(){
    var x = 10;
    var x = function(){
        x--;
        return x;
    }
    x++;
    function x(){
        return x;
    }
    x+2;
    return x();
}
foo()