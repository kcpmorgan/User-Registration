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
        $(`input`).val("");// Clear teh input
    }
}
   

function init(){
    console.log("Init function");

    //create a user and display it on the console
    let user1 = new User("Aria","Mitchell","ariab@gmail.com","Cat23","Female","16","123 Main St","555-555-555","Debit","Blue");
    let user2 = new User("Kemar","Morgan","kemor@gmail.com","Yotown13","Male","35","123 Main St","555-555-555","Debit","Black");
    console.log(user1,user2);
}


window.onload=init;

