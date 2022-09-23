let menu=document.querySelector(".menu-icon");
let navbar=document.querySelector(".navbar")
menu.onclick=()=>{
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move")
}
window.onscroll=()=>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("menu")
}
// email js 

function validate(){
    let name=document.querySelector(".name");
    let email=document.querySelector(".email");
    let msg=document.querySelector(".message");
    let sendBtn=document.querySelector(".send-btn");

    sendBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(name.value == "" || email.value == ""|| msg.value== ""){
            emptyerror();
        }
        else{
            sendmail(name.value,email.value,msg.value);
            success();
        }
    });
}

validate();

function sendmail(name,email,msg){
    emailjs.send("service_sywz5g9","template_sfxjy67",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}

function emptyerror(){
    swal({
        
            title: "Error!",
            text: "Please Fill All Fields",
            icon: "error",
           
          
    });
}


function success(){
    swal({
        
            title: "Message Sent Successfully!",
            text: "Message Is Recieved Will Get Back Soon!",
            icon: "success",
           
          
    });
}

let header=document.querySelector("header");
window.addEventListener("scroll",()=>{
header.classList.toggle("header-active",window.scrollY>0);
})

let scrollTop=document.querySelector(".scroll-top");
window.addEventListener("scroll",()=>{
scrollTop.classList.toggle("scroll-active",window.scrollY>100);
})