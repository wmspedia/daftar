
function PostData(firstname,lastname,phone,username,email,password){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "firstname": firstname,
        "lastname": lastname,
        "username": username,
        "phone": phone,
        "email": email,
        "password": password
      });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("https://wms2.ulbi.ac.id/api/account", requestOptions)
    .then(response => {
        console.log('POST Response:', response);
        return response.json();
    })
    .then(data => {
        console.log('Confirmation Data:', data);
        if (!data.success) {
            console.error('Confirmation Error:', data.message);
        }
    })
    .catch(error => {
        console.error('Fetch Error:', error);
    });
}
    
function SubmitBtn(){
    firstname=document.getElementById("firstname").value;
    lastname=document.getElementById("lastname").value;
    phone=document.getElementById("phone").value;
    username=document.getElementById("username").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    PostData(firstname,lastname,phone,username,email,password);
}
    
    