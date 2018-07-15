// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    
    $("#clear-day").append('<h3><i class="far fa-sun"></i> <br>Clear</h3>');
    $("#clear-night").append('<h3><i class="fas fa-moon"></i><br> Clear</h3>');
    $("#rain").append('<h3><i class="fas fa-umbrella"></i><br> Rain</h3>');
    $("#snow").append('<h3><i class="fas fa-snowflake"></i><br> Snow</h3>');
    $("#sleet").append('<h3><i class="fas fa-snowflake"></i><br> Sleet</h3>');
    $("#wind").append('<h3><i class="fas fa-exclamation-triangle"></i><br> Wind</h3>');
    $("#fog").append('<h3><i class="fas fa-exclamation-triangle"></i><br> Fog</h3>');
    $("#cloudy").append('<h3><i class="fas fa-cloud"></i><br> Cloudy</h3>');
    $("#partly-cloudy-day").append('<h3><i class="fas fa-cloud"></i> <br>Partly-Cloudy</h3>');
    $("#partly-cloudy-night").append('<h3><i class="fas fa-cloud"></i><br> Partly-Cloudy</h3>');
    
});