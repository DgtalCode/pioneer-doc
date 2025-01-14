"use strict"

// wait loading a pages and styles
window.onload = function(){
	
	//Проверка, что файл находится не на локальной машине
	let urlCheck = document.location.href;
	// console.log(urlCheck);
	if(urlCheck.indexOf('file') != -1){		
		return;
	}

	let newsMsgFlag = document.cookie.match(/newsMsgFlag=(.+?)(;|$)/);
	if (newsMsgFlag != null && newsMsgFlag[1] == 1 ){
		// console.log('not now')
	}	
	else{
		setTimeout(function(){
			callMsg()
		},5000)		
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
	let headerText = ('<span>Кейсы от пользователей Пионер Мини</span>');
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
	let observer1 = new MutationObserver(callback);	
	observer1.observe(document.body, {childList: true})

	function callback(mutationRecords,observer){
		// console.log(mutationRecords);
		let btn1 = document.getElementById('msgBtnOk');
		let btn2 = document.getElementById('msgBtnClose');
		setTimeout(function(){
			btn1.style.transform = 'scale(1,1)';
			btn2.style.transform = 'scale(1,1)';
		},800)
		observer1.disconnect();
	}

	document.body.prepend(overlay);
	overlay.style.display = "block";
	setTimeout(function(){overlay.style.opacity = "1";},20)

	//Add EventListener
	const msgButtons = document.querySelectorAll('.msgBtn');	
	msgButtons.forEach(elem => {
		 elem.addEventListener('click', btnClick);		 
	})
	document.cookie = "newsMsgFlag=1; max-age=604800; secure; samesite=strict; domain=geoscan.aero; path=/ru";
	// 604800 - 1week	
}

function btnClick(event){	
	if (event.target.id == 'msgBtnOk'){
		closeNewsMsg(event);
		window.location.href = 'https://docs.geoscan.aero/ru/master/learning-cases/main-cases.html#id3';

	}
	if (event.target.id == 'msgBtnClose'){
		closeNewsMsg(event);
	}	
}

function closeNewsMsg(event){
	
	let overlay = document.querySelectorAll('.msgOverlay');
	
	overlay[0].style.opacity = "0";
	setTimeout(function(){
		overlay[0].remove();
	},800)
}




