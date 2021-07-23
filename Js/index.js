$(document).ready(function(){

    $("#design").on("click", function(){
        
        $("#pdesign").toggle(1000);
        
        $("#des").css("font-weight", "bold");

        $("#design").toggle(1000);
        
    });

    $("#pdesign").on("click", function(){

        $("#design").show(1000);

        $("#des").css("font-weight", "normal");

        $("#pdesign").hide(1000)

    });

    $("#development").on("click", function(){

        $("#pdevelopment").toggle(1000);

    });
    $("#product").on("click", function(){

        $("#pproduct").toggle(1000);

    });
});
