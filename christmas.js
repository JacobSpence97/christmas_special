
$.getJSON("http://api.wunderground.com/api/fd843d28868e77c2/conditions/q/MS/Water_Valley.json").done(function(json){
  weather = json.data;
  console.log(json)
});
