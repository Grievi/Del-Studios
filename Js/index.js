$(document).ready(function(){
debugger
    $("#design").on("click", function(){
        
        $("#pdesign").toggle(1000);
        
        $("#des").css("font-weight", "bold")
        .css("cursor","pointer" );

        $("#design").toggle(1000);
        
    });

    $("#pdesign").on("click", function(){

        $("#design").show(1000);

        $("#des").css("font-weight", "normal");

        $("#pdesign").hide(1000);

    });

    $("#development").on("click", function(){

        $("#pdevelopment").toggle(1000);

        $("#dev").css("font-weight", "bold");

        $("#development").toggle(1000);

    });

    $("#pdevelopment").on("click", function(){
        
        $("#development").show(1000);

        $("#dev").css("font-weight", "normal");

        $("#pdevelopment").hide(1000);
    });

    $("#product").on("click", function(){

        $("#pproduct").toggle(1000);

        $("#prod").css("font-weight", "bold");

        $("#product").toggle(1000)

    });
    
    $("#pproduct").on("click", function(){

        $("#product").show(1000);

        $("#prod").css("font-weight", "normal");

        $("#pproduct").hide(1000)
    })

    // portfolio section.. hover effect---------------------------

    $(".image-overlay").hover(function(){

        $(".image-title").css("border", "1px solid","white");

        $(".image-title").css("border-radius","2px")
        $(".image-title").css("padding","5px")
    })
})

// ----------form validation----------------


function validation (){
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    let text;

    error_message.style.padding = "10px"

    if(name.length<=2 || name.length == ""){
        text = "Please Enter a Valid Name";
        error_message.innerHTML = text;
        name.focus();
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6 || email.lenght == ""){
        text = "Please Enter a Valid Email";
        error_message.innerHTML = text;
        name.focus();
        return false;
        
    }
    if(message.length>140 || message.length <= 50 || message.length == ""){
        text = "Please Enter a more than 50 characters";
        error_message.innerHTML = text;
        name.focus();
        return false
    }
    else{
        // error_message.innerHTML.hide();
        alert("Your message has been received successfully. Thank You");
        return true;
    }
    return true
}



  



