$.getJSON("http://api.wunderground.com/api/fd843d28868e77c2/conditions/q/MS/Water_Valley.json").done(function(json) {
    weather = json.data;
    console.log(json)
});
var songs = ["adam.mp3", "addey.mp3", "dustin.mp3", "jacob.mp3",
              "jamesh.mp3", "jamess.mp3", "matain.mp3", "nate.mp3",
              "nicloe.mp3", "randoms.mp3", "ricky.mp3", "sean.mp3"]

var trees = ["tree1.png", "tree2.png", "tree3.jpeg"];

var smd = ["broom1.png", "broom2.png", "hat1.png", "hat2.png", "snowmanface.png"]

var ctd = ["ornament1.png", "ornament2.png", "ornament3.png", "star1.png", "star2.png", "star3.png"]

function tree() {
    var which = trees[Math.floor(Math.random() * 3)];
    $("#treebox").attr("src", "img/" + which);
};
var pic = $("#treebox")
function song() {
    var which = songs[Math.floor(Math.random() * 12)];
    for(x = 0; x < songs.length; x ++){
      $("#music").attr("src", "sound/" + which);
    }
  };

function show_choice() {
    pic.empty()
    if ($('#myList').val() == 'christmas tree') {
        tree()
    } else {
        $("#treebox").attr("src", "img/snowman.png")
    };
}




    $(document).ready(function() {
      song()
        $("#submit").click(function() {
            show_choice()
        });
    });

    //
    // $(function() {
    //     $("#items").draggable();
    // });
