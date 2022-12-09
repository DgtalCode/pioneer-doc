Описание методов pioneer_sdk
============================

| На данной странице разобраны методы библиотеки pioneer_sdk.
| Примеры скриптов можно найти на `GitHub`_. Более подробно они разобраны в разделе `Описание работы скриптов`_. 
| С инструкцией по настройке среды Pycharm можно ознакомиться в разделе `Подготовка к программированию`_.

.. note:: Текущее API актуально для библиотеки pioneer_sdk начиная с версии 0.4.0

.. contents::
   :local:

..  tip:: Значения аргументов, представленных в описании метода являются стандартными, то есть если написано: led_control(led_id=255, r=0, g=0, b=0)
          то в программе его можно вызывать как led_control() - эквивалент надписи выше. Или например led_control(r=255) — тогда частично будут задействованы стандартные значения.

Pioneer
-------

Создание объекта класса:
~~~~~~~~~~~~~~~~~~~~~~~~

.. py:class:: Pioneer(name='pioneer', ip='192.168.4.1', mavlink_port=8001, connection_method='udpout', device='/dev/serial0', baud=115200, logger=True, log_connection=True)

	:arg name: путь до Lua-файла;
	:arg ip: ip-адрес дрона;
	:arg mavlink_port: порт для обмена MAVLink сообщениями;
	:arg connection_method: принимает аргументы "udpin"; "udpout"; "serial";
	:arg device: указание порта;
	:arg baud: скорость передачи;
	:arg logger: логи MAVLink сообщений. **True** - выводить в консоль; **False** - не выводить;
	:arg log_connection: логи соединения. **True** - выводить в консоль; **False** - не выводить;
	:return: Объект класса Pioneer.

Описание методов класса Pioneer:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. py:classmethod:: connected()

	:return: Возвращает **False**, если соединение потеряно (в течении секунды нет сообщений от дрона), возвращает **True**, если соединение стабильное.



.. py:classmethod:: close_connection()

	:return: Закрывает MAVLink соединение с дроном.
	:Примечание: Метод поддерживается с версии pioneer_sdk 0.4.3;



.. py:classmethod:: reboot_board()

	:return: Перезагрузка дрона. Возвращает **True**, если результат 'ACCEPTED' или 'DENIED'; |br|
			 Возвращает **False**, если результат 'SEND_TIMEOUT', 'TEMPORARILY_REJECTED', 'UNSUPPORTED', 'FAILED', 'CANCELLED'; |br|
			 Смотри :ref:`Pioneer.mav_result`.



.. py:classmethod:: set_logger(value=True)

	:arg value: принимает значения **True** или **False**;
	:return: Установка флага 'logger' в **True** или **False**.



.. py:classmethod:: set_log_connection(value=True)

	:arg value: принимает значения **True** или **False**;
	:return: Установка флага "log_connection" в **True** или **False**.



.. py:classmethod:: arm()

	:return: Заводит моторы квадрокоптера. Возвращает **True**, если результат 'ACCEPTED' или 'DENIED'; |br|
			 Возвращает **False**, если результат 'SEND_TIMEOUT', 'TEMPORARILY_REJECTED', 'UNSUPPORTED', 'FAILED', 'CANCELLED'; |br|
			 Смотри :ref:`Pioneer.mav_result`.



.. py:classmethod:: disarm()

	:return: Отключае моторы квадрокоптера. Возвращает **True**, если результат 'ACCEPTED' или 'DENIED'; |br|
			 Возвращает **False**, если результат 'SEND_TIMEOUT', 'TEMPORARILY_REJECTED', 'UNSUPPORTED', 'FAILED', 'CANCELLED'; |br|
			 Смотри :ref:`Pioneer.mav_result`.



.. py:classmethod:: takeoff()

	:return: Взлёт на высоту takeoffAlt. Возвращает **True**, если результат 'ACCEPTED' или 'DENIED'; |br|
			 Возвращает **False**, если результат 'SEND_TIMEOUT', 'TEMPORARILY_REJECTED', 'UNSUPPORTED', 'FAILED', 'CANCELLED'; |br|
			 Смотри :ref:`Pioneer.mav_result`.

	:Примечание: Явных аргументов нет. Высота взлета задаётся параметром автопилота **Flight_com_takeoffAlt=x**, где x-высота взлета в метрах.



.. py:classmethod:: land()

	:return: Выполняет команду на посадку. Возвращает **True**, если результат 'ACCEPTED' или 'DENIED'; |br|
			 Возвращает **False**, если результат 'SEND_TIMEOUT', 'TEMPORARILY_REJECTED', 'UNSUPPORTED', 'FAILED', 'CANCELLED'; |br|
			 Смотри :ref:`Pioneer.mav_result`.



.. py:classmethod:: lua_script_upload(lua_source)

	:arg lua_source: путь до Lua-файла.
	:return: Загрузка Lua-скрипта на дрон.



.. py:classmethod:: lua_script_control(state='Stop')

	:arg state: "Start" - запуск скрипта, "Stop" - остановка скрипта.
	:return: Запуск/остановка Lua-скрипта. Возвращает **True**, если результат 'ACCEPTED' или 'DENIED'; |br|
			 Возвращает **False**, если результат 'SEND_TIMEOUT', 'TEMPORARILY_REJECTED', 'UNSUPPORTED', 'FAILED', 'CANCELLED'; |br|
			 Смотри :ref:`Pioneer.mav_result`.



.. py:classmethod:: led_control(led_id=255, r=0, g=0, b=0)

    :arg led_id: номер светодиода для управления. (255 - все светодиоды; 0-3 — светодиоды от 1 до 4).
    :arg r,g,b: каналы по управлению красным зелёным и синим свечением светодиода 0-255 - интенсивность соответствующего канала.

    :return: Включение светодиодов. Возвращает **True**, если результат 'ACCEPTED' или 'DENIED'; |br|
    		 Возвращает **False**, если результат 'SEND_TIMEOUT', 'TEMPORARILY_REJECTED', 'UNSUPPORTED', 'FAILED', 'CANCELLED'; |br|
    		 Смотри :ref:`Pioneer.mav_result`.



.. py:classmethod:: go_to_local_point(x=None, y=None, z=None, yaw=None)

	:arg x,y,z: координаты точки, в метрах.
	:arg yaw: угол рысканья, задается в радианах.
	:return: Отправка команды полёта в точку. Координаты указываются в **локальной системе координат**; |br|
			 Возвращает **True**, если команда отправлена успешно, **False** - если не удалось отправить или пришёл отказ.



.. py:classmethod:: go_to_local_point_body_fixed(x, y, z, yaw)

	:arg x,y,z: координаты точки, в метрах.
	:arg yaw: угол рысканья, задается в радианах.

	:return: Отправка команды полёта в точку. Координаты указываются в **системе координат дрона**; |br|
			 Возвращает **True**, если команда отправлена успешно, **False** - если не удалось отправить или пришёл отказ.



.. py:classmethod:: set_manual_speed(vx, vy, vz, yaw_rate)

	:arg vx,vy,vz: скорость в м/с.
	:arg yaw_rate: скорость рад/с.

	:return: Отправка команды полёта с заданной скоростью. Координаты указываются в **локальной системе координат**; |br|
			 Возвращает **True**, если команда отправлена успешно, **False** - если не удалось отправить или пришёл отказ; |br|
			 Команду **set_manual_speed** надо отправлять не один раз, а постоянно, пока необходимо лететь с заданной скоростью!



.. py:classmethod:: set_manual_speed_body_fixed(vx, vy, vz, yaw_rate)

	:arg vx,vy,vz: скорость в м/с.
	:arg yaw_rate: скорость рад/с.

	:return: Отправка команды полёта с заданной скоростью. Координаты указываются в **системе координат дрона**; |br|
			 Возвращает **True**, если команда отправлена успешно, **False** - если не удалось отправить или пришёл отказ; |br|
			 Команду **set_manual_speed_body_fixed** надо отправлять не один раз, а постоянно, пока необходимо лететь с заданной скоростью.



.. py:classmethod:: point_reached()

	:return: Возвращает текущее состояние флага (True/False). Флаг устанавливается в **True** регулярно при достижении новой точки, и сбрасывается в **False** после каждого вызова функции point_reached() и после отправки go_to_local_point() или go_to_local_point_body_fixed().



.. py:classmethod:: get_local_position_lps(get_last_received=False)

	:arg get_last_received: если аргумент get_last_received=True, то возвращает значения [x, y, z] из последнего пришедшего сообщения; |br|
							Возвращает **None**, если с дрона не было ни одного сообщения с координатами.
	:return: Массив [x, y, z] с текущими координатами в локальной системе отсчёта. Возвращает **None**, если нет новых актуальных данных.



.. py:classmethod:: get_dist_sensor_data(get_last_received=False)

	:arg get_last_received: если аргумент get_last_received=True, то возвращает данные с дальномера из последнего пришедшего сообщения; |br|
							Возвращает **None**, если с дрона не было ни одного сообщения с показаниями дальномера.
	:return: Возвращает последние данные с дальномера (в метрах). Возвращает **None**, если нет новых актуальных данных.



.. py:classmethod:: get_optical_data(get_last_received=False)

	:arg get_last_received: если аргумент get_last_received=True, то возвращает словарь с данными из последнего пришедшего сообщения; |br|
							Возвращает **None**, если с дрона не было ни одного сообщения с данными оптического потока.
	:return: Возвращает словарь (dict), содержащий последнее данные с оптического потока. Возвращает **None**, если нет новых актуальных данных.



.. py:classmethod:: get_battery_status(get_last_received=False)

	:arg get_last_received: если аргумент get_last_received=True, то возвращает вольтаж батареи из последнего пришедшего сообщения; |br|
							Возвращает **None**, если с дрона не было ни одного сообщения о состоянии батареи.
	:return: Возвращает текущий вольтаж батареи. Возвращает **None**, если нет новых актуальных данных.



.. py:classmethod:: get_preflight_state()

	:return: Возвращает словарь (dict) со значениями ошибок, возникших при preflight.



.. py:classmethod:: get_autopilot_state()

	:return: Возвращает текущее состояние автопилота:('ROOT', 'DISARMED',	'IDLE',	'TEST_ACTUATION', 'TEST_PARACHUTE', 'TEST_ENGINE', 'PARACHUTE', 'WAIT_FOR_LANDING', 'LANDED', 'CATAPULT', 'PREFLIGHT', 'ARMED', 'TAKEOFF', 'WAIT_FOR_GPS', 'WIND_MEASURE', 'MISSION', 'ASCEND', 'DESCEND', 'RTL', 'UNCONDITIONAL_RTL', 'MANUAL_HEADING', 'MANUAL_ROLL', 'MANUAL_SPEED', 'LANDING', 'ON_DEMAND')



.. py:classmethod:: get_autopilot_version()

	:return: Возвращает текущую версию автопилота.



.. py:classmethod:: send_rc_channels(channel_1=0xFF, channel_2=0xFF, channel_3=0xFF, channel_4=0xFF, channel_5=0xFF, channel_6=0xFF, channel_7=0xFF, channel_8=0xFF)

	:arg channel_1-8: RC-каналы.
	:return: Отправка значений на каналы.



.. py:classmethod:: raspberry_poweroff()

	:return: Выключение Raspbery Pi. Функция для базового пионера с модулем Raspbery Pi; |br|
			 Возвращает **True**, если результат 'ACCEPTED' или 'DENIED'; |br|
			 Возвращает **False** - если результат 'SEND_TIMEOUT', 'TEMPORARILY_REJECTED', 'UNSUPPORTED', 'FAILED', 'CANCELLED'; |br|
			 Смотри :ref:`Pioneer.mav_result`.



.. py:classmethod:: raspberry_reboot()

	:return: Перезагрузка Raspbery Pi. Функция для базового пионера с модулем Raspbery Pi; |br|
			 Возвращает **True**, если результат 'ACCEPTED' или 'DENIED'; |br|
			 Возвращает **False** - если результат 'SEND_TIMEOUT', 'TEMPORARILY_REJECTED', 'UNSUPPORTED', 'FAILED', 'CANCELLED'; |br|
			 Смотри :ref:`Pioneer.mav_result`.



.. py:classmethod:: raspberry_start_capture(interval=0.1, total_images=0, sequence_number=0)

	:arg interval: интервал в секундах между фотографиями;
	:arg total_images: общее кол-во фотографий 0 - делаются до вызова raspberry_stop_capture().

	:return: Запуск записи видео на Raspbery Pi. Функция для базового пионера с модулем Raspbery Pi; |br|
			 Возвращает **True**, если результат 'ACCEPTED' или 'DENIED'; |br|
			 Возвращает **False** - если результат 'SEND_TIMEOUT', 'TEMPORARILY_REJECTED', 'UNSUPPORTED', 'FAILED', 'CANCELLED'; |br|
			 Смотри :ref:`Pioneer.mav_result`.



.. py:classmethod:: raspberry_stop_capture()

	:return: Остановка записи видео на Raspbery Pi. Функция для базового пионера с модулем Raspbery Pi; |br|
			 Возвращает **True**, если результат 'ACCEPTED' или 'DENIED'; |br|
			 Возвращает **False** - если результат 'SEND_TIMEOUT', 'TEMPORARILY_REJECTED', 'UNSUPPORTED', 'FAILED', 'CANCELLED'; |br|
			 Смотри :ref:`Pioneer.mav_result`.



.. py:classmethod:: raspberry_led_custom(mode=1, timer=0, color1=(0, 0, 0), color2=(0, 0, 0))

	:arg mode: **1** - светить постоянно цветом **color1**; |br|
			   **2** - переключать цвета между **color1** и **color2** в течении времени **timer**; |br|
			   **3** - выключить полностью;
	:arg timer: время выполнения mode 2;
	:arg color1: цвет в RGB;
	:arg color2: цвет в RGB;

	:return: Включение светодиодов. Функция для базового пионера с модулем Raspbery Pi; |br|
			 Возвращает **True**, если результат 'ACCEPTED' или 'DENIED'; |br|
			 Возвращает **False** - если результат 'SEND_TIMEOUT', 'TEMPORARILY_REJECTED', 'UNSUPPORTED', 'FAILED', 'CANCELLED'; |br|
			 Смотри :ref:`Pioneer.mav_result`.


.. _Pioneer.mav_result:

Pioneer.mav_result
------------------

 - | -1: 'SEND_TIMEOUT', 
 - |  0: 'ACCEPTED', 
 - |  1: 'TEMPORARILY_REJECTED', 
 - |  2: 'DENIED', 
 - |  3: 'UNSUPPORTED', 
 - |  4: 'FAILED', 
 - |  5: 'IN_PROGRESS', 
 - |  6: 'CANCELLED'

Camera
------

Создание объекта класса:
~~~~~~~~~~~~~~~~~~~~~~~~

.. py:class:: Camera(timeout=0.5, ip='192.168.4.1', port=8888, video_buffer_size=65000, log_connection=True)

	:arg timeout: тайм-аут получения сообщения через сокет.
	:arg ip: ip-адрес дрона.
	:arg port: порт дрона для отправки изображения с камеры.
	:arg video_buffer_size: размер буфера для считывания изображений.
	:arg log_connection: логи соединения. **True** - выводить в консоль; **False** - не выводить.

	:return: создание объект класса Camera.


Описание методов класса Camera
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. py:classmethod:: connect()

	:return: Подключение к дрону для получения изображения.


.. py:classmethod:: disconnect()

	:return: Отключиться от дрона.


.. py:classmethod:: get_frame()

	:return: Получение изображения. Возвращает массив байтов в успешном случае. В противном случае возвращает **None**; |br|
			 Если в процессе получения картинки выяснилось, что соединение потеряно, то происходит переподключение.


.. py:classmethod:: get_cv_frame()

	:return: Предварительно декодированный фрейм.
	:Примечание: Метод поддерживается с версии 0.4.2;


VideoStream
-----------

Создание объекта класса:
~~~~~~~~~~~~~~~~~~~~~~~~

.. py:class:: VideoStream(logger=True)

	:arg logger: **True** или **False**. Вывод статуса соединения в консоль.
	:return: Объект класса VideoStream


Описание методов класса VideoStream
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. py:classmethod:: start()

	:return: Запуск потока видео. (Стрим запускается в отдельном потоке)


.. py:classmethod:: stop()

	:return: Остановка потока видео.

.. _GitHub: https://github.com/geoscan/pioneer_sdk/tree/master/examples
.. _Описание работы скриптов: https://docs.geoscan.aero/ru/master/programming/python/python-sdk-scripts.html
.. _Подготовка к программированию: https://docs.geoscan.aero/ru/master/programming/python/python-sdk-main.html
