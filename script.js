let currentImage = 1;
let form = document.querySelector(".form");
let obj = {}

let display=document.querySelector(".display");
let ludo=document.querySelector(".ludo")
let badluck=document.querySelector(".bad-luck")
let container=document.querySelector(".container");
let final=document.querySelector(".final");
let coupon=document.querySelector(".coupon");
let Again =document.querySelector(".try");
// console.log(form)
var c=1;
var count=0
var sum=0;
 function ludogame(){
    if(count<3){
    const play1=Math.floor(Math.random()*6)+1;
    sum+=play1;
    const play1dice=`image/dice${play1}.png`;
    document.getElementById('check1').setAttribute('src',play1dice);
}
count++;
return sum;
}

function clickImage(id) {
    if (id === currentImage) {
        // alert("Image" + id + "clicked");
       

        if (currentImage === 1) {
            document.getElementById("img" + id).style.pointerEvents = "none";
           
            form.style.display = "block"
            form.addEventListener("submit", showName);



        }
        else if (currentImage === 2) {
            document.getElementById("img" + id).style.pointerEvents = "none";
            currentImage++;
            form.style.display = "none"
            display.innerHTML='Name:  '+obj.name+'  &&  Username: '+obj.username;
        }

        else if(currentImage === 3){
            display.style.display="none"
            
            ludo.style.display="block";
            
           setTimeout(()=>{
            if(sum>10){
            currentImage++; 
            alert("sum is greater than 10 " +sum) 
            document.getElementById("img" + id).style.pointerEvents = "none"; 
            Again.style.display="none" 
            }
            else if(sum<=10 && c<2){
                alert("sum is smaller than 10 " +sum)
                c++;
                count=0;
                sum=0;
                ludo.style.display="none";
                Again.style.display="block"
                
            }
            else{
                // alert("Bad Luck");
                ludo.style.display="none";
                Again.style.display="none"
                badluck.style.display="block";
                currentImage=5;
            }
        },10000)
        }
        else if(currentImage ===4){
            ludo.style.display="none";
            let code=generateCouponCode();
            container.style.display="none"
            final.style.display="block";
            coupon.innerHTML=code;

            

        }
       

    }

}



function showName(e) {
    e.preventDefault();
    currentImage++;
    var name = document.querySelector(".name").value;
    var username = document.querySelector(".user-name").value;
    var email = document.querySelector(".email").value;
    obj = { name, username }
    alert("Form submitted Successfully")

    document.querySelector(".name").value =" ";
    document.querySelector(".user-name").value =" ";
    document.querySelector(".email").value =" ";
    return false;
}

function generateCouponCode(){
    let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let coupon='';
    for(let i=0;i<12;i++){
        coupon+=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return coupon;
}
