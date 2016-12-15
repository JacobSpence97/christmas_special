var songs = ["adam.mp3", "addey.mp3", "dustin.mp3", "jacob.mp3",
    "jamesh.mp3", "jamess.mp3", "rock.mp3", "martain.mp3", "nate.mp3",
    "nicloe.mp3", "onna.mp3", "randoms.mp3", "ricky.mp3", "sean.mp3", "snowman.mp3","frosty.mp3","up.mp3","elvis.mp3" ,"holly.mp3","burl.mp3"
];

var trees = ["tree1.png", "tree2.png", "tree3.png"];

var smd = ["broom1.png", "broom2.png", "hat1.png", "hat2.png", "face.png","arm1.png","arm2.png", "mitten.png", "right.png", "buttons.png"];

var ctd = ["ornament1.png", "ornament1.png", "ornament1.png", "ornament2.png", "ornament3.png", "ornament3.png", "ornament3.png", "star1.png", "star2.png", "star3.png", "gift.png", "gift2.png", "present.png"];

function tree() {
    var which = trees[Math.floor(Math.random() * 3)];
    $("#treebox").attr("src", "img/" + which).stop(false, true);
};
var pic = $("#treebox");
var item = $("#items");

function song() {
    var which = songs[Math.floor(Math.random() * 20)]
    $("#music").attr("src", "sound/" + which);
    console.log(which)
};

function snowman() {
    for (x = 0; x < smd.length; x++) {
        $("#items").append("<img src=img/" + smd[x] + " ><\img>");
        $("img").draggable();
    }
};

function christmas_tree() {
    for (x = 0; x < ctd.length; x++) {
        $("#items").append("<img src=img/" + ctd[x] + " ><\img>");
        $("img").draggable({
          containment: "#bigbox"
        });
    }
};

function show_choice() {
    pic.empty();
    if ($('#myList').val() == 'christmas tree') {
        tree();
        christmas_tree();

    } else {
        $("#treebox").attr("src", "img/snowman.png").stop(false, true);
        snowman();
    }
};



function grinch() {
    pic.empty();
    item.hide();
    $("#music").attr("src", "sound/grinch.mp3");
    $("#treebox").attr("src", "img/grinch.jpg").hide().fadeIn(9999);

};

function background(image) {
  $("body").css({'background': 'url(img/' + image + '.jpg) no-repeat center center fixed',
                 '-webkit-background-size': 'cover',
                 '-moz-background-size': 'cover',
                 '-o-background-size': 'cover',
                 'background-size': 'cover',
                 'background-repeat': 'no-repeat'
  });
};



$(document).ready(function() {
    $.getJSON("https://api.wunderground.com/api/fd843d28868e77c2/conditions/q/MS/Water_Valley.json").done(function(json) {
        var weather = json;
        var temp = weather.current_observation.temp_f;
        // $('#temp_').text(temp);
        if (Number(temp) <= 60) {
            background('snow');
        } else {
            background('sun');
        }
    });
    $("#submit").click(function() {
        $("#items").empty();
        show_choice();
        song();
        item.show();
    });
    $("#grinch").click(function() {
        grinch();
    });
});
