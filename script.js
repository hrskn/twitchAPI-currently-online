var output = document.querySelector('#output');
var urlSize = 'https://api.twitch.tv/kraken/streams/'
var streamUrl = 'https://wind-bow.gomix.me/twitch-api/streams/';
$(document).ready(function(){
var streamers = ["syndicate", "riotgames", "esl_csgo", "nightblue3", "summit1g", "imaqtpie", "lirik", "sodapoppin","tsm_bjergsen","captainsparklez","tsm_bjergsen"]

for (var i = 0; i < streamers.length; i++) {
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+streamers[i], function(data){
        if (data.stream !== null) {
          console.log(data.stream);
        $('#output').append("<h3 id='first'>" + data.stream.channel.display_name+"<div id='circle'></div></h3>");
        $('#output').append("<a target='_blank' href='https://www.twitch.tv/"+data._links.self.slice(urlSize.length)+"'><img src='"+data.stream.channel.logo+"' size='120' height='120'</img></a>");
        $('#output').append("<p>Currently playing: <br><strong> "+data.stream.game+"</strong></p>");
      }
      else {
        $('#off').append("<span>"+data._links.self.slice(urlSize.length)+", </span>");
        console.log(data._links.self.slice(0,urlSize.length));
      }
    });
    }
    });
