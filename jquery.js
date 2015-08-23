$(document).ready(function() {


$('#revealColorSelect').click(function(){
  
  changeColor();
  $('#colorSelect').toggle();


});

  function changeColor(){
  var r = $('#red').val();
  var g = $('#green').val();
  var b = $('#blue').val();
  
  

  $('#newColor').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ' )');

}

$("input[type=range]").on("input", changeColor);

$('#addNewColor').click(function(){
    
  var r = $('#red').val();
  var g = $('#green').val();
  var b = $('#blue').val();

   function rgb2hex(orig){
 var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
}

       function invertColor(hexTripletColor) {
         var color = hexTripletColor;
         color = color.substring(1);           // remove #
         color = parseInt(color, 16);          // convert to integer
         color = 0xFFFFFF ^ color;             // invert three bytes
         color = color.toString(16);           // convert to hex
         color = ("000000" + color).slice(-6); // pad with leading zeros
         color = "#" + color;                  // prepend #
         return color;
        }

        myColor = 'rgb(' + r + ',' + g + ',' + b + ' )';

        var hexColor = rgb2hex(myColor);

        var textColor = invertColor(hexColor);


    

    $('.tech, .health, .mission, .name, h1, h3, footer, button').css({'background-color': 'rgb(' + r + ',' + g + ',' + b + ' )','color':textColor});

    });


$('.original').click(function(){

 $('.tech, .health, .mission, .name, h1, h3, footer, button').css({'background-color': '#2eb8b8','color':'#ffffff'});


  });                   


});