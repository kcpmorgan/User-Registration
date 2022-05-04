function displayUsers(usersArray){
    //travel the array
    let row="";
    for(let i=0;i<usersArray.length;i++){
        //get each user
        let user = usersArray[i];
        console.log(user);
        //create the row=`<>${} <>`
        row+=`
        <tr>
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.Email}</td>
            <td>${user.Gender}</td>
            <td>${user.Age}</td>
            <td>${user.Address}</td>
            <td>${user.Phone}</td>
            <td>${user.PaymentMethod}</td>
            <td>${user.Color}</td>
        </tr>`;
        console.log(row);      
    }
  //append the user on the html table-->read jquery documentation append
    $("#usersTable").append(row);
}
function init(){
    console.log("listing users");
    let users=readUsers();
    console.log(users);
    displayUsers(users);
    
    // let users=readUsers();//this fn is on the storeManager
    // displayUsers(users);
}
window.onload=init;