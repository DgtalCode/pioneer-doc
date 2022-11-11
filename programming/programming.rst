Программирование
=========================

Кроме полета на дистанционном управлении, "Пионер" может следовать заложенной перед взлетом программе и автономно выполнять прописанные задачи. Для удобства программирования квадрокоптер поддерживает работу с такими инструментами как Pioneer Station и TRIK Studio, которые позволяют сформировать полетное задание и загрузить его в память "Пионера" при подключении к компьютеру.
В этом разделе вы научитесь работать с квадрокоптером через интерфейс Pioneer Station, рассмотрите примеры полетных сценариев и узнаете как программировать подключаемые модули.

   
.. raw:: html
	
 	<style type ="text/css">
 		.cardWrapper{display: flex; flex-wrap: wrap; width:100%;}
 		.block{display: flex; flex-direction: column; flex: 1; min-width: 28%; margin: 5px; background-color:#ffffff;}

 		.blockDesc{display:flex; height:36px; justify-content: space-around; align-items:center; background-color:#fed136;}
 		.blockCont{display:flex; flex-direction: column; margin:10px 10px; line-height: 160%;}

 		@media(max-width: 1320px){.block{min-width: 48%;}}
 		@media(max-width: 600px){.block{width: 100%;}} 

 	</style>

 	<div class = "cardWrapper">
 		<div class = "block">
 			<div class ="blockDesc">Pioneer Station</div> 			
 				<div class ="blockCont">
 					<a href="">Знакомство с программой</a>
 					<a href="">Описание блоков</a>
 					<a href="">Примеры программ</a>
 				</div> 			
 		</div>
 		<div class = "block">
 			<div class ="blockDesc">TRIK Studio</div>
 				<div class ="blockCont">
 					<a href="">Знакомство с программой</a>
 					<a href="">Редактор кода</a>
 					<a href="">Работа с USB-модемом</a>
 				</div>	
 		</div>
 		<div class = "block">
 			<div class ="blockDesc">LUA</div>		
 				<div class ="blockCont">
 					<a href>Документация по API</a>
 					<a href>Описание функций</a>
 					<a href>Распиновка платы автопилота</a>
 					<a href>Примеры LUA-скриптов</a>
 				</div>		
 		</div>
 		<div class = "block">
 			<div class ="blockDesc">Python</div>
 				<div class ="blockCont">
 					<a href>Подготовка к программированию</a>
 					<a href>Описание методов Python_sdk</a>
 					<a href>Примеры и разбор скриптов</a>
 				</div>	
 		</div>
 		<div class = "block">
 			<div class ="blockDesc">Pioneer MAX</div>
 				<div class ="blockCont">
 					<a href>PioneerBricks</a>
 					<a href>Инструменты разработки</a>
 					<a href>Программирование с помощью PythonAPI</a>
 				</div>		
 		</div>
 		<div class = "block">
 			<div class ="blockDesc">Pioneer JUMP</div>
 				<div class ="blockCont">
 					<a href>Режим блочного программирования</a>
 					<a href>Описание блоков</a>
 					<a href>Примеры программ</a>
 				</div>
 		</div>
 	</div>


 .. toctree::
   :maxdepth: 2
   :caption: Содержание:

   /programming/trik/trik_main
   /programming/pioneer_station/pioneer_station_main
   /programming/lua/lua_main
   python/python_main
   pioneer_max/max_main
