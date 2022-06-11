const receivesAFunction= callback=>callback();

function returnsANamedFunction(){
    return function firstfunction(){};
}


function returnsAnAnonymousFunction(){
    return ()=>{};

}
    