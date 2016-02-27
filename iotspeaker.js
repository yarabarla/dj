// @flow
const fetch = require('node-fetch');
const koa = require('koa');
const app = module.exports = koa();

var songs = [];

app.use(function *(){
  console.log(this.query);
  var params = this.query;
  var message = 'Error, please enter art, duration, and stream';

  if (params.art && params.duration && params.stream) {
    message = (`(Song ${songs.length}): Art: ${params.art}, Duration: ${params.duration}, Stream URL: ${params.stream}`);
    songs.push(params);
    playSongs(typeof params.local === 'string');
  } else if (params.songs != undefined){
    message = JSON.stringify(songs);
  }

  console.log(message);
  console.log();
  this.message = message;
});


playSongs(local) {
  if (local) {
    //local playback
  } else {
    //remote playback
  }
}


app.listen(3000);
