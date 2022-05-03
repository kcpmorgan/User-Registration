//create a User constructor
class User {
    constructor(firstName,lastName,Email,Password,Gender,Age,Address,Phone,PaymentMethod,Color) {
        this.firstname = firstName;
        this.lastname = lastName;
        this.Email = Email;
        this.Password = Password;
        this.Gender = Gender;
        this.Age = Age;
        this.Address = Address;
        this.Phone = Phone;
        this.PaymentMethod = PaymentMethod;
        this.Color = Color;
    }
}

function isValid(user){
    let valid=true;
    $("input").removeClass("input-error");
    if(user.Email.length==0){
        valid=false;
        console.error("Add an email");
        $("#txtEmail").addClass("input-error");
    }
    if(user.Password==0){
        valid=false;
        console.error("Add a password");
        $("#txtPassword").addClass("input-error");
    }
    return valid;
}
function validatePass(){
    console.log("validating pass");
    //get the value from the input
    let txtPass=$("#txtPassword");
    let password=txtPass.val();//compare if the password is less than 6 characters
    if(password.length<6){
        txtPass.css("background","#ff9898");//jquery function to change the css
        displayError("The password is too short :( ");
    }else{
        txtPass.css("background","#64ce66");//jquery function to change the 
        hideError();
    }
}

function displayError(msg){
    $("#alertError").removeClass("hide").text(msg);
}
function hideError(){
    $("#alertError").addClass("hide");
}
function register(){
    let inputfirstName = $("#txtFirstName").val();
    let inputlastName = $("#txtLastName").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputGender = $("#txtGender").val();
    let inputAge = $("#txtAge").val();
    let inputAddress = $("#txtAddress").val();
    let inputPhone = $("#txtPhone").val();
    let inputPaymentMethod = $("#txtPaymentMethod").val();
    let inputColor = $("#txtColor").val();


    let newUser = new User(inputfirstName,inputlastName,inputEmail,inputPassword,inputGender,inputAge,inputAddress,inputPhone,inputPaymentMethod,inputColor); 
    if(isValid(newUser)){
        saveUser(newUser);//This fn is on the storemanager
        $('input').val("");// Clear the input
    }else{
        displayError("Please complete all fields");
    }
    }
   
function init(){
    console.log("register");

   $("#txtPassword").keyup(validatePass); //executed everytime that the 
}


window.onload=init;

