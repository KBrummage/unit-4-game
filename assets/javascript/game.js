$(document).ready(function(){
    var identification;
    var char = 0;
 

    //scroll over Rebellion
    $(".InstructionsTop").hover(function(){ 
        $(".InstructionsTop").css({"background-color": "transparent"});
        $(".InstructionsBackgroundTop").css({"opacity": "1", "border": "5px yellow solid"})
        $(".Instructions").hide();

    }, function(){
    $(".InstructionsBackgroundBottom").show();
    $(".InstructionsBottom").show();
    $(".InstructionsTop").css({"background-color": "#ffffffB3"});
    $(".InstructionsBackgroundTop").css({"opacity": "1", "border": "0px yellow solid"})
    $(".Instructions").show();

    })
    //scroll over Empire
    $(".InstructionsBottom").hover(function(){ 
        $(".InstructionsBottom").css({"background-color": "transparent"});
        $(".InstructionsBackgroundBottom").css({"opacity": "1"})
        $(".InstructionsBackgroundBottom").css({"opacity": "1", "border": "5px yellow solid"})
        $(".Instructions").hide();


    }, function(){
    $(".InstructionsBackgroundTop").show();
    $(".InstructionsTop").show();
    $(".InstructionsBottom").css({"background-color": "#ffffffB3"});
    $(".InstructionsBackgroundBottom").css({"opacity": "1", "border": "0px yellow solid"})
    $(".Instructions").show();
    })
    //if you chose the light path

    $(".InstructionsTop").click(function(){
        $(".front").remove();
        $(".Light-Lineup").css({"visibility": "visible"});
        $(".Instructions").show();
        $("#InstImage").attr("src", "assets/images/PickedRebellion.png")
    })
    
    //if you chose the dark path
    $(".InstructionsBottom").click(function(){
        $(".front").remove();
        $(".Dark-Lineup").css({"visibility": "visible"});
        $(".Instructions").show();
        $("#InstImage").attr("src", "assets/images/PickedEmpire.png")
    })
    //scroll over character to pick
    $(".Lineup").hover(function(){
        $(this).css({"border": "5px yellow solid"});
        }, 
        function(){
        $(this).css({"border": ""})
        }
    )
    //when you click on a character
    $(".Lineup").click(function(){
        if (char < 1){
            char++;
        identification = $(this).attr("id");
        var side = $(this).attr("class")
        
        $(".Dark-Lineup").hide();
        $(".Light-Lineup").hide();
       
        if (side == "Light Lineup"){
            $(".Light-Character").html(this);
        $(".Dark-Opponent").css({"visibility": "visible"})
        } else {
            $(".Dark-Character").html(this);
            $(".Light-Opponent").css({"visibility": "visible"});
        }}

        else{
            $(".Dark-Character").html(this);
            $(".Light-Opponent").css({"visibility": "hidden"});
            $(".Dark-Opponent").css({"visibility": "hidden"})
        }

        
        })

    

    

    


})