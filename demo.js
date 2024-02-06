function validateForm() {
    let name= document.forms["myForm"]["username"].value;
    let pwd=document.forms["myForm"]["password"].value;
    var regName = /\d+$/g;     
    


    if (name === "" ) {
        window.alert("Username should not be blank");
        name.focus();
        return false;
      
    }
    else if(regName.test(name))
    {
        window.alert("Please enter valid name.");
        name.focus();
        return false;
      
    }
    
    
      if(pwd === "")
      {
        
        window.alert("Password should not be blank");
        name.focus();
        return false;
        
      }
      else if (pwd.length<6 ) {
        alert("Password should have 6 chracter");
        pwd.focus();
        return false;
      
      }
  
 
  
        alert("Thank You..Successfullt Registered");
      
      
  }
