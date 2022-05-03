function login(){
    //get values from the form
    let inputEmail=$("#txtEmail").val();
    let inputPassword=$("#txtPassword").val();
    // use a flag to know if user was found or not
    let flag=false;
    //get users from localStorage
    let userList=readUsers();//this fn is on the storeManager
    //travel the userList
    for(let i=0;i<userList.length;i++){
        let user=userList[i];
        if(user.email===inputEmail && user.password===inputPassword){
            flag=true;
            window.location="users.html"
        }
        if(!flag){
            $("#alertError").renoveClass("hide");
            setTimeout(function(){
                
            },3000);
        }
    }
}

function init(){
    $("#loginBtn").click(login);
}

window.onload=init;