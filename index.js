let number =document.getElementById("number");
let counter = 0;
setInterval(()=>{
    if(counter==65){
        clearInterval()
    }

    else{
        counter += 1
        number.innerHTML = counter + "%"
    
    }
},30)



// const numberEL = document.querySelector(".number")
// numberEL.forEach(numberEL => {
//     numberEL.innerText = "0"
//     increaseCount()
//     function increaseCount(){
//          let currentNum = +numberEL.innerText
//          const dataCeil = numberEL.getAttribute("data-ceil")
//          const increase = dataCeil/2
//     }
    
// });

