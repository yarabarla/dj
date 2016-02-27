var url = 'https://api.soundcloud.com/tracks/249235321/stream';

const player = require('play-url')({ soundcloud: 'd61f17a08f86bfb1dea28539908bc9bf'});
player.play(url);
player.onEnd(function(){
  player.play(url);
});

/*const StreamPlayer = require('stream-player');
var player = new StreamPlayer();

player.add(url);
var metadata = {
  "title": "Some song",
  "artist": "Some artist",
  "duration": 234000,
  "humanTime": "3:54"
};

player.add('http://path-to-mp3.com/example.mp3', metadata);

player.play();
*/
