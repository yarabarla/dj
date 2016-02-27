// @flow
try {
  const fetch = require('node-fetch');
  const koa = require('koa');
  const app = module.exports = koa();
  const FormData = require('form-data');

  var songs = [];

  app.use(function *(){
    console.log(this.query);
    var params = this.query;
    var message = '[Error, please enter correct params]';

    if (params.art && params.duration && params.stream && params.title) {
      message = (`(Song ${songs.length}): Art: ${params.art}, Duration: ${params.duration}, Stream URL: ${params.stream}`);
      songs.push(params);
      playSongs(params, typeof params.local === 'string');
    } else if (params.songs != undefined){
      message = JSON.stringify(songs);
    }

    //console.log(message);
    //console.log();
    this.status = 200;
    this.message = message;
  });


  function playSongs(params, local) {
    console.log(`${params.title}: ${params.stream}`);
    if (local) {
      //local playback
    } else {
      //remote playback


      var url = `http://hkiotcloud.herokuapp.com/api/v1/play_web_media?SessionToken=${params.id}&MediaUrl=${params.stream}`;
      var form = new FormData();
      form.append('Authorization', `Bearer ${params.token}`);
      fetch(url, { method: 'GET', body: form, headers: form.getHeaders() })
      	.then(function(res) {
      		return res.json();
      	})
        .then(function(json) {
      		console.log(`Response: ${json}`);
      	});
    }
  }


  app.listen(3000);

} catch (e) {
  console.log(e);
}
