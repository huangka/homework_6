var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	//Play the video and update the volume information.  
	video.play();
	let volume = video.volume;
	console.log(volume);
	console.log(document.getElementById("volume").innerHTML);
	document.getElementById("volume").innerHTML=(volume * 100) + '%';

});

document.querySelector("#pause").addEventListener("click", function() {
	//Pause the video.
	video.pause();
	
	
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted==false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML="Unmute";
		
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML="Mute";
	}
	
	
	
});




document.querySelector("#slower").addEventListener("click", function() {
	//Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
	var speed = video.playbackRate;
	speed = speed - (speed*0.1);
	video.playbackRate = speed;
	console.log(speed);
	
});

document.querySelector("#faster").addEventListener("click", function() {
	//Increase the current video speed by each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down.
	var speed = video.playbackRate;
	speed = speed + (speed*0.1);
	video.playbackRate = speed;
	console.log(speed);
	
});

document.querySelector("#skip").addEventListener("click", function() {
	//Advance the current video by 5 seconds.  If the video length has been exceeded - go back to the start of the video.   Log the current location of the video and play the video.
	var time = video.currentTime;
	time += 5;
	if (time >= video.duration){
		var newTime = 0;
		video.currentTime = newTime;
		console.log(newTime);
		video.play();
	}
	else{
		var newTime = time;
		video.currentTime = newTime;
		console.log(newTime);
		video.play();
	}
	
	
	
});






document.querySelector("#old").addEventListener("click", function() {
	//Utilize the existing grayscale class.
	//var styleSheet = document.styleSheets[0]; 
	//for (var i = 0; i < styleSheet.rules.length; i++) {
		//if (styleSheet.rules[i].selectorText === '.oldTime') {
			//var filtercolor = styleSheet.rules[i].style.filter;
			//var newWidth = styleSheet.rules[i].style.width;
			//var newBorder = styleSheet.rules[i].style.border;
			//var newBorderRadius = styleSheet.rules[i].style.borderRadius;
			//video.style.filter= filtercolor;
			//video.style.width= newWidth;
			//video.style.border= newBorder;
			//video.style.borderRadius= newBorderRadius;
			
		//}    
	//}

  	video.classList.add("oldTime");
	
});




document.querySelector("#original").addEventListener("click", function() {
	//Turn off grayscale class.
	//var styleSheet = document.styleSheets[0]; 
	//for (var i = 0; i < styleSheet.rules.length; i++) {
	//	if (styleSheet.rules[i].selectorText === 'video') {
	//		var newWidth = styleSheet.rules[i].style.width;
	//		var newBorder = styleSheet.rules[i].style.border;
	//		video.style.filter= "none";
	//		video.style.width= newWidth;
	//		video.style.border= newBorder;
	//		video.style.borderRadius= 0;
	//	}    
	
 

 
	//Remove the CSS class using classList.remove()
	video.classList.remove('oldTime');
});

//Change the volume based on the slider and update the volume information.
document.querySelector("#volumeSlider").addEventListener("change", function() {
	let newVol=document.querySelector("#volumeSlider").value;
	console.log(newVol*0.01);
	video.volume = newVol*0.01;
	//console.log(document.getElementById("volume").innerHTML);
	document.getElementById("volume").innerHTML=newVol + '%';
	


	
});
