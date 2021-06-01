let getToken = document.getElementById("token");

getToken.onclick = async function ()
{
    try
    {
        let url = 'http://localhost:12345/get_token';
        let response = await fetch(url);
        let commits = await response.text(); 
        alert(commits);
    }
    catch(err)
    {
        console.log(err);
        alert("Token NOT_FOUND");
    }
}

let register = document.getElementById("register");

register.onclick = async function ()
{
    let userData = 
    {
        "username" : String(document.getElementById("username").value),
        "data" : String(document.getElementById("data").value),
        "token" : String(document.getElementById("tokenInput").value)
    };

    let responseReg = await fetch('http://localhost:12345/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    });

    if ( responseReg.ok)
    {
        alert("User Registered Successfully");
    }
    else 
    {
        alert(await responseReg.json().error);
    }
}

let login = document.getElementById("dataGet");

login.onclick = async function ()
{
    let tokenEntered ={}
    tokenEntered.token= document.getElementById("inputToken").value ;
    
    let response = await fetch('http://localhost:12345/get_data', 
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(tokenEntered)
    });
    let userValue=document.getElementById("username1");
    let dataValue=document.getElementById("data1");
    if (response.ok) 
    {
        let result = await response.json();
        userValue.innerHTML = "Username: " + result.username;
        dataValue.innerHTML = "Data: " + result.data;
    }
    else
    {
        alert(await response.json().error);
    }
}