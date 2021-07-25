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
    })

    
})






