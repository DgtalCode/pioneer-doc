"use strict"

// wait loading a pages and styles
window.onload = function(){
	
	let newsMsgFlag = document.cookie.match(/newsMsgFlag=(.+?)(;|$)/);	
	if (newsMsgFlag != null && newsMsgFlag[1] == 1 ){
		console.log('not now')
	}	
	else{
		callMsg()
	}
};

function callMsg(){
	//Generation of overlay, message block and childs
	//Overlay
	let overlay = document.createElement('div');
	overlay.className  = "msgOverlay";
	//Block
	let msgWrapper = document.createElement('div');
	msgWrapper.className  = "msgWrapper";

	let msgBlock = document.createElement('div');
	msgBlock.className  = "msgBlock";

	let msgHeader = document.createElement('div');
	msgHeader.className = "msgHeader";	

	let msgContent = document.createElement('div');
	msgContent.className = "msgContent";

	let msgContentText = document.createElement('div');
	msgContentText.className = "msgContentText";

	//Buttons
	let msgBtnWrapper = document.createElement('div')
	msgBtnWrapper.className = "msgBtnWrapper";
	msgBtnWrapper.insertAdjacentHTML('afterbegin','<div id="msgBtnOk" class="msgBtn"></div><div id="msgBtnClose" class="msgBtn"></div>')


	//Text
	let headerText = ('<span>Кейсы от пользователей Pioneer Mini</span>');
	let mainText = ('<span>На сайте появились новые кейсы от участников конкурса "Hello Pioneer". '+
		'<br>Предлагаем ознакомиться с работами будущих инженеров и программистов!</span>');

	msgHeader.insertAdjacentHTML('afterbegin', headerText);
	msgContentText.insertAdjacentHTML('afterbegin', mainText);
	msgBtnWrapper.children[0].prepend('Хочу посмотреть');
	msgBtnWrapper.children[1].prepend('Не интересно');

	//Nesting
	overlay.prepend(msgWrapper);

	msgWrapper.appendChild(msgBlock);	
	msgBlock.prepend(msgHeader, msgContent);
	msgContent.prepend(msgContentText);	
	msgContent.append(msgBtnWrapper);	


	//Insert and display
	overlay.addEventListener('transitionstart', function(){
		let btn1 = document.getElementById('msgBtnOk');
		let btn2 = document.getElementById('msgBtnClose');
		setTimeout(function(){
			btn1.style.transform = 'scale(1,1)';
			btn2.style.transform = 'scale(1,1)';
		},800)
	})
	document.body.prepend(overlay);
	overlay.style.display = "block";
	setTimeout(function(){overlay.style.opacity = "1";},20)

	//Add EventListener

	const msgButtons = document.querySelectorAll('.msgBtn');	
	msgButtons.forEach(elem => {
		 elem.addEventListener('click', btnClick);		 
	})
	document.cookie = "newsMsgFlag=1; max-age=20; domain=geoscan.aero";	
}

function btnClick(event){
	console.log(event.target.id);
	if (event.target.id == 'msgBtnOk'){
		window.location.href = 'https://docs.geoscan.aero/ru/master/learning-cases/main-cases.html#id3';
	}
	if (event.target.id == 'msgBtnClose'){
		closeNewsMsg();
	}
}

function closeNewsMsg(){
	let overlay = document.querySelectorAll('.msgOverlay');
	console.log(overlay[0]);
	overlay[0].style.opacity = "0";
	setTimeout(function(){
		overlay[0].remove();
	},800)
}




