
$.getJSON("http://api.wunderground.com/api/fd843d28868e77c2/conditions/q/MS/Water_Valley.json").done(function(json){
  weather = json.data;
  console.log(json)
});
var trees = ["tree1.png", "tree2.png", "tree3.jpeg"];
function tree(){
  var which = trees[Math.floor(Math.random() * 3)];
  $("#treebox").attr("src", "img/" + which);
}
$(document).ready(tree);
