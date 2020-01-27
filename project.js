document.body.style.backgroundImage = "url('RaBP.gif')";
var count = 0;
var start = new Date();

function leftFunction(){
	if(count>0){
		console.log("it's working!!");
	}
	if(count === 0 ){
		document.getElementById("right").style.display = 'none';
		document.getElementById("left").style.display = 'none';
		document.getElementById("TA").innerHTML="You Died! the apocolypse killed human kind!";
		document.body.style.backgroundImage = "url('dog.gif')";
	}else if(count === 1){
		document.getElementById("left").innerHTML="offer an award, you will do anything to prevent it";
		document.getElementById("right").innerHTML="Don't offer an award, you know you can't afford this";
		document.getElementById("TA").innerHTML="You advertiseing in the news and papers, but what will you offer?";
		document.body.style.backgroundImage = "url('news.gif')";
	}else if(count === 2){
		var rightt = document.getElementById("right");
		var up = " <button id='up' onclick='upFunction()'>SUICIDE is the only way out!</button>";
		var down = "&nbsp;<button id='down'onclick='downFunction()'>Run away! they will never catch you!</button>"
		console.log("hi1")
		rightt.insertAdjacentHTML("afterend",up);
		rightt.insertAdjacentHTML("afterend",down);
		console.log("hi");
		document.getElementById("right").innerHTML="Threatened to kill their family.";
		document.getElementById("left").innerHTML="Commit an insurance fraud"; 
		document.getElementById("TA").innerHTML="A lot of people come, you saved the world! But now they want their money";
		document.body.style.backgroundImage = "url('winn.gif')";
	}else if(count===3){
		document.getElementById("right").style.display = 'none';
		document.getElementById("down").style.display = 'none';
		document.getElementById("left").innerHTML="Turn yourself in";
		document.getElementById("up").innerHTML="Run away";
		document.getElementById("TA").innerHTML="The police are after you!";
		document.body.style.backgroundImage = "url('police.gif')";
		count=5;
	}else if(count===4){
		document.getElementById("up").style.display = 'none';
		document.getElementById("down").style.display = 'none';
		document.getElementById("right").style.display = 'none';
		document.getElementById("left").style.display = 'none';
		document.getElementById("TA").innerHTML="The police arrive, You get killed in a shootout";
		document.body.style.backgroundImage = "url('shootout.gif')";
	}else if(count===6){
		document.getElementById("up").style.display = 'none';
		document.getElementById("down").style.display = 'none';
		document.getElementById("right").style.display = 'none';
		document.getElementById("left").style.display = 'none';
		document.getElementById("TA").innerHTML="you had a really bad lawyer, you going to prison";
		document.body.style.backgroundImage = "url('jail.gif')";
	}
	count++;
	console.log(count);	
}

function rightFunction(){
	if(count===0){
		start = new Date();
		document.getElementById("right").innerHTML="Call your friends and family";
		document.getElementById("left").innerHTML="Advertise in the news and papers, get the public to help you";
		document.getElementById("TA").innerHTML="Call for help from everyone you know. No matter what, you can stop it.";
		document.body.style.backgroundImage = "url('call.gif')";
		console.log("heyyy");
	}else if(count===1){
		var end = new Date();
		var TIME = (end-start)/1000;
		document.getElementById("right").style.display = 'none';
		document.getElementById("left").style.display = 'none';
		document.getElementById("TA").innerHTML="It took you " +TIME+" seconds to choose, your friends are already dead. DO BETTER NEXT TIME";
		document.body.style.backgroundImage = "url('nooo.gif')";
	}else if(count===2){
		document.getElementById("right").style.display = 'none';
		document.getElementById("left").style.display = 'none';
		document.getElementById("TA").innerHTML="Some people believe you, but not enough. You see the end of the world and commit SUICIDE!";
		document.body.style.backgroundImage = "url('Ssuicide.gif')";
	}else if(count===3){
		document.getElementById("up").style.display = 'none';
		document.getElementById("down").innerHTML="Just  a threat";
		document.getElementById("left").innerHTML="Kill someone";
		document.getElementById("right").style.display = 'none';
		document.getElementById("TA").innerHTML="Threaten to kill their family.";
		document.body.style.backgroundImage = "url('Killfamily.gif')";
	}else if(cuont===4){
		document.getElementById("up").style.display = 'none';
		document.getElementById("down").style.display = 'none';
		document.getElementById("right").style.display = 'none';
		document.getElementById("left").style.display = 'none';
		document.getElementById("TA").innerHTML="You go to prison";
		document.body.style.backgroundImage = "url('jail.gif')";
	}else if(count===6){
		document.getElementById("up").style.display = 'none';
		document.getElementById("down").style.display = 'none';
		document.getElementById("right").style.display = 'none';
		document.getElementById("left").style.display = 'none';
		document.getElementById("TA").innerHTML="You change your idenety and start your new life";
		document.body.style.backgroundImage = "url('CI.gif')";
	}
	count++;
}

function upFunction(){
	if(count===3){
		document.getElementById("TA").innerHTML="No it's not! You still have hope in life! I refuse to think otherwise";
		document.getElementById("right").style.display = 'none';
		document.getElementById("left").style.display = 'none';
		document.getElementById("up").style.display = 'none';
		document.getElementById("down").style.display = 'none';
		document.body.style.backgroundImage = "url('GO.gif')";
	}else if(count===6){
		document.getElementById("up").style.display = 'none';
		document.getElementById("down").style.display = 'none';
		document.getElementById("right").style.display = 'none';
		document.getElementById("left").style.display = 'none';
		document.getElementById("TA").innerHTML="You change your idenety and start your new life";
		document.body.style.backgroundImage = "url('CI.gif')";
	}
}

function downFunction(){
	if(count===3){
		document.getElementById("TA").innerHTML="They catch you, you are going to prison";
		document.getElementById("right").style.display = 'none';
		document.getElementById("left").style.display = 'none';
		document.getElementById("up").style.display = 'none';
		document.getElementById("down").style.display = 'none';
		document.body.style.backgroundImage = "url('jail.gif')";
	}else if(count==4){
		document.getElementById("TA").innerHTML="You go to prison";
		document.getElementById("right").style.display = 'none';
		document.getElementById("left").style.display = 'none';
		document.getElementById("up").style.display = 'none';
		document.getElementById("down").style.display = 'none';
		document.body.style.backgroundImage = "url('jail.gif')";
	}
}