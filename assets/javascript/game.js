$(document).ready(function () {
    var identification;
    var char = 0;
    var enemy;
    var counter = 1;
    var side;
    var deaths = 0
    var players = {
        Rey: {
            name: "Rey",
            side: "Light",
            attack: 5,
            health: 60,
            counterattack: 7
        },

        Obi: {
            name: "Obi",
            attack: 10,
            side: "Light",
            health: 60,
            counterattack: 7
        },

        Yoda: {
            name: "Yoda",
            attack: 15,
            side: "Light",
            health: 70,
            counterattack: 5
        },

        Quigon: {
            name: "QuiGon",
            attack: 20,
            side: "Light",
            health: 75,
            counterattack: 7
        },

        Luke: {
            name: "Luke",
            attack: 25,
            side: "Light",
            health: 75,
            counterattack: 8
        },

        Kylo: {
            name: "Kylo",
            attack: 5,
            side: "Dark",
            health: 50,
            counterattack: 3
        },

        Maul: {
            name: "Maul",
            attack: 15,
            side: "Dark",
            health: 60,
            counterattack: 4
        },

        Vader: {
            name: "Vader",
            attack: 10,
            side: "Dark",
            health: 70,
            counterattack: 6
        },

        Grievous: {
            name: "Grievous",
            attack: 15,
            side: "Dark",
            health: 75,
            counterattack: 4
        },

        Palpatine: {
            name: "Palpatine",
            attack: 10,
            side: "Dark",
            health: 75,
            counterattack: 6
        }
    }

    var darkArray = ["Kylo", "Maul", "Vader", "Grievous", "Palpatine"];
    var lightArray = ["Rey", "Obi", "Yoda", "Quigon", "Luke"];

    //scroll over Rebellion
    $(".InstructionsTop").hover(function () {
        $(".InstructionsTop").css({
            "background-color": "transparent"
        });
        $(".InstructionsBackgroundTop").css({
            "opacity": "1",
            "border": "5px yellow solid"
        })
        $(".Instructions").hide();

    }, function () {
        $(".InstructionsBackgroundBottom").show();
        $(".InstructionsBottom").show();
        $(".InstructionsTop").css({
            "background-color": "#ffffffB3"
        });
        $(".InstructionsBackgroundTop").css({
            "opacity": "1",
            "border": "0px yellow solid"
        })
        $(".Instructions").show();

    })
    //scroll over Empire
    $(".InstructionsBottom").hover(function () {
        $(".InstructionsBottom").css({
            "background-color": "transparent"
        });
        $(".InstructionsBackgroundBottom").css({
            "opacity": "1"
        })
        $(".InstructionsBackgroundBottom").css({
            "opacity": "1",
            "border": "5px yellow solid"
        })
        $(".Instructions").hide();


    }, function () {
        $(".InstructionsBackgroundTop").show();
        $(".InstructionsTop").show();
        $(".InstructionsBottom").css({
            "background-color": "#ffffffB3"
        });
        $(".InstructionsBackgroundBottom").css({
            "opacity": "1",
            "border": "0px yellow solid"
        })
        $(".Instructions").show();
    })
    //if you chose the light path
    $(".InstructionsTop").click(function () {
        $(".front").remove();
        $(".Light-Lineup").css({
            "visibility": "visible"
        });
        $(".Instructions").show();
        $("#InstImage").attr("src", "assets/images/PickedRebellion.png")
    })

    //if you chose the dark path
    $(".InstructionsBottom").click(function () {
        $(".front").remove();
        $(".Dark-Lineup").css({
            "visibility": "visible"
        });
        $(".Instructions").show();
        $("#InstImage").attr("src", "assets/images/PickedEmpire.png")
    })
    //scroll over character to pick
    $(".Lineup").hover(function () {
            $(this).css({
                "border": "5px yellow solid"
            });
        },
        function () {
            $(this).css({
                "border": ""
            })
        }
    )
    //when you click on a character
    $(".Lineup").click(function () {
        if (char < 1) {
            char++;
            identification = $(this).attr("id");
            console.log(identification + "<--Identification");
            side = $(this).attr("class")
            console.log(side + "<-- side you picked");

            $(".Dark Lineup").css({
                "visibility": "hidden"
            })
            $(".Light Lineup").css({
                "visibility": "hidden"
            })

            if (side == "Light Lineup") {
                $(".Light-Character").html(this);
                $(".Dark2ndLineup").css({
                    "visibility": "visible"
                })
                $(".Light-Lineup").css({
                    "visibility": "hidden"
                })
            } else {
                $(".Dark-Character").html(this);
                $(".Light2ndLineup").css({
                    "visibility": "visible"
                });
                $(".Dark-Lineup").css({
                    "visibility": "hidden"
                })
            }
        } else {
            side = $(this).attr("class");
            console.log(side + "<--class of opponent");
            if (side == "Dark2ndLineup Lineup") {
                $(".Dark-Character").html(this);
                enemy = $(this).attr('id');
                console.log(enemy + "<-- enemy");
                console.log(this);
            } else {
                $(".Light-Character").html(this);
                enemy = $(this).attr("id");
                console.log(side + "<--class of opponent");
                console.log(enemy + "<--opponent");
            }
            $(".scoreboard").css({
                "visibility": "visible"
            });
            console.log(players);
            $(".you").html("<p><b> " + identification + ":</b></p>" +
                "<p><b> Attack: </b>" + players[identification].attack + "</p>" +
                "<p><b> Health: </b>" + players[identification].health + "</p>" +
                "<p><b> CounterAttack: </b>" + players[identification].counterattack + "</p>");
            $(".opp").html("<p><b> " + enemy + ":</b></p>" +
                "<p><b> Attack: </b>" + players[enemy].attack + "</p>" +
                "<p><b> Health: </b>" + players[enemy].health + "</p>" +
                "<p><b> CounterAttack: </b>" + players[enemy].counterattack + "</p>");
            $("#InstImage").hide();
            $(".scoreboard").css({
                "background-image": "assets/images/FightScene.jpg"
            });
            $(".attackBtn").html("<img id='attackBtn' style = 'opacity: .75' src= 'assets/images/Attack.png'>");
        }


    })

    $("#attackBtn").hover(function () {
        $(this).css({
            "opacity": "1",
            "border": "5px yellow solid"
        });

    }, function () {
        $(this).css({
            "opacity": ".5",
            "border": "0px"
        });
    })
    console.log(counter + "<--counter");
    $(".attackBtn").mouseup(function () {
        console.log(deaths + "<--deaths");
        if ((players[identification].health > 0) && (players[enemy].health > 0)) {
            players[enemy].health = players[enemy].health - (players[identification].attack * counter);
            players[identification].health = players[identification].health - players[enemy].counterattack;

            $(".you").html("<p><b> " + identification + ":</b></p>" +
                "<p><b> Attack: </b>" + players[identification].attack + "</p>" +
                "<p><b> Health: </b>" + players[identification].health + "</p>" +
                "<p><b> CounterAttack: </b>" + players[identification].counterattack + "</p>");
            $(".opp").html("<p><b> " + enemy + ":</b></p>" +
                "<p><b> Attack: </b>" + players[enemy].attack + "</p>" +
                "<p><b> Health: </b>" + players[enemy].health + "</p>" +
                "<p><b> CounterAttack: </b>" + players[enemy].counterattack + "</p>");
            console.log(side + "<--side at this point");


            console.log(counter + "<-- counter before");
            counter = counter + 1;
            console.log(counter + "<--counter after");




            if ((players[identification].health > 0) && (players[enemy].health <= 0)) {

                $(".opp").html("<p><b>" + players[enemy].name + " died.  Pick another player");
                deaths++;
                console.log(deaths);
                if (side === "Dark2ndLineup Lineup") {
                    $(".Dark-Character").html("<img src='assets/images/CrossSabers.png' >");
                } else {
                    $(".Light-Character").html("<img src='assets/images/CrossSabers.png'>");
                }
                console.log(deaths);
                if (deaths == 5) {
                    $(".scoreboard").html("<p><b> You WON </b></p>")
                } else {
                    $(".attackBtn").html("<img src='assets/images/ChooseNext.png'>");
                }
            }

            if(players[identification].health <= 0){
                $(".scoreboard").html("<p><b> You LOST </b></p>")
            }
        }

    })

})