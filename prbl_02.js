

let s = "javascript"
function vowelsAndConsonants(s) {
    for (const x of s){
        if (x==="a" || x==="e" || x==="i" || x==="o" || x==="u"){
            console.log(x)
        }
    }
    for (const x of s){
    if(! (x==="a" || x==="e" || x==="i" || x==="o" || x==="u")){
            console.log(x)
        }
    }
}


    
    vowelsAndConsonants(s);
