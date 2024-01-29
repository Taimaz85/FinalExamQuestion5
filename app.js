document.querySelector("#print").addEventListener('click', function() {
    const strnum = document.getElementById("num");
    
    for(let i=1 ; i<=strnum.value ; i++){
        console.log("* ".repeat(i));
    }
})
 