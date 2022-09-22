let menu=document.querySelector(".menu-icon");
menu.onclick=()=>{
    menu.classList.toggle("move")
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