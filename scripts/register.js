//create a User constructor
class User {
    constructor(firstName, lastName, Email, Password,Gender,Age,Address,Phone,PaymentMethod) {
        this.fname = firstName;
        this.lname = lastName;
        this.Email = Email;
        this.Password = Password;
        this.Gender = Gender;
        this.Age = Age;
        this.Address = Address;
        this.Phone = Phone;
        this.PaymentMethod = PaymentMethod;
    }
}

function register(){
    let inputfirstName = $("#txtfirstName").val();
    let inputlastName = $("#txtlastName").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputGender = $("#txtGender").val();

    console.log(inputfirstName,inputlastName,inputEmail,inputPassword,inputGender);
}

function init(){
    console.log("Init function");
}
//create a user and display it on the console
let user1 = new User("Aria","Mitchell","ariab@gmail.com","Cat23",);
let user2 = new User("Kemar","Morgan","kemor@gmail.com","Yotown13");
console.log(user1,user2);


window.onload=init;
