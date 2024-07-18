var typed= new Typed(".text",{
    strings:[ " Frontend Developer!","Web Developer!"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
function sendMail() {
    var params = {
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        Message: document.getElementById("message").value
    };

    const serviceID = "service_mu9n739";   
    const templateID = "template_ud73kxn"; 

    emailjs.send(serviceID, templateID, params)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            alert("Your message has been sent successfully!");
        }, function(error) {
            console.log("FAILED...", error);
            alert("Message sending failed");
        });
}

