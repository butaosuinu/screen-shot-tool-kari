var video = document.getElementById('video');
var streamUrl;
var getImage=function (callback) {
	var canvas = document.createElement('canvas');
	var conctext = canvas.getContext('2d');
	conctext.drawImage(video,0,0,canvas.width,canvas.height);
	callback(canvas.toDataUrl());
};

navigator.webkitGetUserMedia({
	audio: false,
	video: {
		mandatory{
			chromeMediaSource: 'screen',
			minWidth: 400,
			maxWidth: 3000,
			minHeight: 300,
			maxHeight: 2000
		}
	}
}, function (stream) {
	var url;
	streamUrl = window.URL.createObjectURL(stream);
	video.src = streamUrl;
	video.play();
},function (error) {
	console.log(error);
});