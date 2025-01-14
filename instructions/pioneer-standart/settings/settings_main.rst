Настройка "Пионера"
===================

Для корректной работы всех систем Pioneer Base рекомендуется использовать последнюю актуальную версию прошивки и параметров автопилота. 
В этом разделе содержится подробная инструкция, которая поможет вам пошагово выполнить все необходимы действия.

.. raw:: html

   <div style="position: relative; padding-bottom: 50%; overflow: hidden; margin-bottom:30px;margin-left: 0px;margin-right: 0px;">
        <iframe src="https://www.youtube.com/embed/Ovkf2G-Dzz8" allowfullscreen="" style="position: absolute; width:100%; height: 100%;" frameborder="0"></iframe>
   </div>

.. important:: Перед осуществлением полета, обязательно обновите прошивку и параметры автопилота. Полет с устаревшей версией прошивки автопилота может быть небезопасен. Проверьте версию прошивки автопилота в Pioneer Station. Для этого подключите квадрокоптер по USB, в правом нижнем углу программы в строчке "Версия АП" должно быть |utd_ap_base|. При необходимости перейдите на страницу :doc:`../settings/firmware_upgrade`.

Список актуальных версий ПО:

* Прошивка автопилота (STM) |utd_ap_base|;
* Параметры автопилота |utd_param_base|;

| Раздел :doc:`firmware_upgrade` поможет правильно выполнить прошивку автопилота.
| Раздел :doc:`autopilot_parameters` содержит информация по загрузке и настройке параметров автопилота. Иногда это может понадобиться для запуска в особых условиях.
| Раздел :doc:`esp32-update` поможет выполнить обновление прошивки контроллера ESP32.
| Раздел :doc:`logs` описывает работу с данными "черного ящика" (логами) квадрокоптера, после завершения полета. Обычно это нужно, если квадрокоптер ведет себя в полете странно и нужно разобраться почему это происходит.


.. toctree::
   :maxdepth: 1
   :caption: Содержание:

   firmware_upgrade
   autopilot_parameters
   logs
