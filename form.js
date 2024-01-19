function validate()
{
     var up =/^[A-Za-z]+$/ 
     var np =/[6-9]{1}[0-9]{9}$/  
     var uname = document.getElementById("uname").value
     var email = document.getElementById("email").value
     var phone = document.getElementById("pn").value
     var password = document.getElementById("psd").value
     var cpassword = document.getElementById("cpsd").value
     if(uname=="")
     {
          document.getElementById("msg1").innerHTML="Enter the Username."
          return false   
     }
     if(uname.match(up)) 
     true;
     else
     {
          document.getElementById("msg1").innerHTML="Username should contain alphabets only"
          return false
     }
     if(uname.length<3)
     {
          document.getElementById("msg1").innerHTML="Username should contain min 3 characters"
          return false
     }
     if(uname.length>8)
     {
          document.getElementById("msg1").innerHTML="Username should contain max 8 characters"
          return false
     }
     if(email=="")
     {
          document.getElementById("msg2").innerHTML="Enter the Email."
          return false   
     }
     if(phone=="")
     {
          document.getElementById("msg3").innerHTML="Enter the Phone Number."
          return false    
     }
     if(phone.match(np))
     true;
     else
     {
          document.getElementById("msg3").innerHTML="Enter the valid PhoneNumber."
          return false      
     }
     if(password=="")
     {
          document.getElementById("msg4").innerHTML="Enter the Password."
          return false  
     }
     if(password.lenght<8)
     {
          document.getElementById("msg4").innerHTML="Password should contain 8 charactor."
          return false
     }
     if(password==cpassword)
     true;
     else
     {
          document.getElementById("msg5").innerHTML="Password and Confirm Pasword must match."
          return false
     }
}