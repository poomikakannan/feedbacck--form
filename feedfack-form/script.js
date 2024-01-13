"use strict"
let feedback = document.forms.feedback_form;

let error = document.querySelector(".error_message")

let username = feedback.elements.usname;
let radio = feedback.elements.feedback_radio;
let email = feedback.elements.mail;
let textarea = feedback.elements.text_area;
let term = feedback.elements.terms;

feedback.addEventListener("submit", (event) => {
    event.preventDefault();

    if(username.value == "")
    {
        error.innerHTML = `<i class="fas fa-exclamation-triangle"></i>     Invalid name`;
        error.classList.add("active"); 
        setInterval(() => {
            error.innerHTML = "";
            error.classList.remove("active");
            error.classList.toggle("active2");
        }, 2000);    
    }
    else if(radio.value == "")
    {
        error.innerHTML = `<i class="fas fa-exclamation-triangle"></i>     Invalid issue`;
        error.classList.add("active"); 
        setInterval(() => {
            error.innerHTML = "";
            error.classList.remove("active");
            error.classList.toggle("active2");
        }, 2000); 
    }
    else if(email.value == "")
    {
        error.innerHTML = `<i class="fas fa-exclamation-triangle"></i>      Invalid E-mail`;
        error.classList.add("active"); 
        setInterval(() => {
            error.innerHTML = "";
            error.classList.remove("active");
            error.classList.toggle("active2");
        }, 2000);    
    }
    else if(textarea.value == "")
    {
        error.innerHTML = `<i class="fas fa-exclamation-triangle"></i>     Invalid Feedback`;
        error.classList.add("active"); 
        setInterval(() => {
            error.innerHTML = "";
            error.classList.remove("active");
            error.classList.toggle("active2");
        }, 2000);  
    }
    else if(term.checked != true)
    {
        error.innerHTML = `<i class="fas fa-exclamation-triangle"></i>      Invalid terms`;
        error.classList.add("active"); 
        setInterval(() => {
            error.innerHTML = "";
            error.classList.remove("active");
            error.classList.toggle("active2");
        }, 2000);  
    }
    else
    {
        error.innerHTML = "Submitted Successfully";
        error.classList.add(`active3`);
        feedback.reset()
        setInterval(() => {
            error.innerHTML = "";
            error.classList.remove("active3");
            error.classList.toggle("active2");
           
            
        }, 3000);
    }

});