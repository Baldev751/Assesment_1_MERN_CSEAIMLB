let User_name = "Baldev";
let User_pass = "Baldev#1";


function validate(){

    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;

    console.log(user)
    console.log(pass)


    if(user == User_name && pass == User_pass){
        window.open("http://127.0.0.1:5500/FSD1Class/Assesment/Assesment_1_MERN_CSEAIMLB/currency.html")
    }

    else{
        alert("Invalid User");
    }
}