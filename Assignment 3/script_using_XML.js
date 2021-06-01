function Token()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            document.getElementById("token").value = JSON.parse(xhttp.responseText).token;
            alert("TOKEN: " + JSON.parse(xhttp.responseText).token);
        }
    }

    xhttp.open("GET", "http://localhost:12345/get_token", true);
    xhttp.send();
}

function register()
{
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4) 
        {
            if(this.status==200)
            {
                alert(xhttp.responseText);
            }

            else
            {
                alert("Error: " + JSON.parse(xhttp.responseText).error);
            }
        }
    }

    var obj = new Object();
    obj.username=String(document.getElementById("username").value);
    obj.data=String(document.getElementById("data").value);
    obj.token=String(document.getElementById("token").value);
    
    xhttp.open("POST","http://localhost:12345/register",true);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.send(JSON.stringify(obj));
}

function data()
{
    var userValue = document.getElementById("username1");
    var dataValue = document.getElementById("data1"); 

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4) 
        {
            var result = JSON.parse(xhttp.responseText);

            if(result.error)alert("ERROR: " + result.error);
            if(this.status=200)
            {
                userValue.innerHTML = "Username: " + result.username;
                dataValue.innerHTML = "Data: " + result.data;
            }
        }
    }

    xhttp.open("POST", "http://localhost:12345/get_data", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    
    var token1 = new Object();
    token1.token = document.getElementById("inputToken").value;
    xhttp.send(JSON.stringify(token1));
}

document.getElementById("token").addEventListener("click", Token);
document.getElementById("register").addEventListener("click", register);
document.getElementById("dataGet").addEventListener("click", data);