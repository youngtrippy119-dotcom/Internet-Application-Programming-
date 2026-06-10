document
.getElementById("registerForm")
.addEventListener("submit", async function(e){

e.preventDefault();

const fullname =
document.getElementById("fullname").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

if(password.length < 8){
    alert("Password must be at least 8 characters");
    return;
}

const response = await fetch(
"api/register.php",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
fullname,
email,
password
})
}
);

const result = await response.json();

alert(result.message);

});
