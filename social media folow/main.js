

const counter=document.querySelectorAll(".counter");

// console.log(contaniner)

counter.forEach((counter)=>{
counter.innerHTML="0"

const updateCounter = () => {


const target= +counter.getAttribute("data-target")

// console.log(typeof(target));
const c= +counter.innerHTML
const incre=target/200;
console.log(incre);
if(c<target){
    counter.innerText=`${Math.ceil(c+incre)}`;

    setTimeout(updateCounter,2)
}else{
    counter.innerText=target;
}

};

updateCounter();

})
