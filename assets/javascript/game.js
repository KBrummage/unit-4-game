$(document).ready(function(){
    var identification;
    var char = 0;
    var enemy;

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
            console.log(identification);
            var side = $(this).attr("class")
            console.log(side);
            
            $(".Dark Lineup").css({"visibility": "hidden"})
            $(".Light Lineup").css({"visibility": "hidden"})
        
            if (side == "Light Lineup"){
                $(".Light-Character").html(this);
                $(".Dark2ndLineup").css({"visibility": "visible"})
                $(".Light-Lineup").css({"visibility": "hidden"})
            } else {
                $(".Dark-Character").html(this);
                $(".Light2ndLineup").css({"visibility": "visible"});
                $(".Dark-Lineup").css({"visibility": "hidden"})
        }}

        else{
            var side = $(this).attr("class");
            console.log(side);
            if(side == "Dark2ndLineup Lineup"){              
              $(".Dark-Character").html(this); 
              enemy = $(this).attr('id');
              console.log(enemy);
              console.log(this);
                }
            else{
                $(".Light-Character").html(this);
                enemy = $(this).attr("id");
                console.log(enemy);
            }
             $(".scoreboard").css({"visibility": "visible"});
             $(".you").html("<p><b> " + identification + ":</b></p>");
             $(".opp").html("<p><b> " + enemy + ":</b></p>");
            }
        })

    

    

    


})