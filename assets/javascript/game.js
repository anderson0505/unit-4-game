$(document).ready(function () {

    var random = Math.floor(Math.random() * 120) + 19;

    $("#randomNumber").text(random);

    var option1 = Math.floor(Math.random() * 12) + 1;
    var option2 = Math.floor(Math.random() * 12) + 1;
    var option3 = Math.floor(Math.random() * 12) + 1;
    var option4 = Math.floor(Math.random() * 12) + 1;

    var wins = 0;
    var losses = 0;
    var userTotal = 0;

    $("#numWins").text("Wins: " + wins);
    $("#numLosses").text("Losses: " + losses);

    function newGame() {
        random = Math.floor(Math.random() * 120) + 1;
        console.log(random);
        $("#randomNumber").text(random);
        option1 = Math.floor(Math.random() * 12) + 1;
        option2 = Math.floor(Math.random() * 12) + 1;
        option3 = Math.floor(Math.random() * 12) + 1;
        option4 = Math.floor(Math.random() * 12) + 1;
        userTotal = 0;
        $("#roundScore").text(userTotal);

    }

    function userWin(){
        wins ++;
        $("#numWins").text("Wins: " + wins);
        newGame ();
    }

    function userLoss() {
        losses ++;
        $("#numLosses").text("Losses: " + losses);
        newGame ();
    }

        $("#topaz").on("click", function () {
            userTotal = userTotal + option1;
            $("#roundScore").text(userTotal);
                if (userTotal === random) {
                    userWin();
                } else if (userTotal > random) {
                    userLoss ();
                }
        })

        $("#ruby").on("click", function () {
            userTotal = userTotal + option2;
            $("#roundScore").text(userTotal);
                if (userTotal === random) {
                    userWin();
                } else if (userTotal > random) {
                    userLoss ();
                }
        })

        $("#diamond").on("click", function () {
            userTotal = userTotal + option3;
            $("#roundScore").text(userTotal);
                if (userTotal === random) {
                    userWin();
                } else if (userTotal > random) {
                    userLoss ();
                }
        })

        $("#jewel").on("click", function () {
            userTotal = userTotal + option4;
            $("#roundScore").text(userTotal);
                if (userTotal === random) {
                    userWin();
                } else if (userTotal > random) {
                    userLoss ();
                }
        })

});

// var random = Math.floor(Math.random() * 1000) + 1;

// $("#topaz", "#ruby", "#diamond", "#jewel").on("click", function() {

//         $("#randomNumber").text(random);

// });