Установка приёмника
===================

На плате автопилота Pioneer Mini предусмотрена возможность подключения радиоприёмника. В ранних версиях это контактные площадки рядом с кнопкой включения(PPM, +3.3, GND) В последних версиях - разъём PicoBlade(3pin).
Подключить можно любой радиоприёмник поддерживающий протокол передачи данных PPM. В первом случае - припаять контакты PPM, +3.3, GND приёмника к соответсвующим контактам на плате автопилота. Во втором случае - подключить приёмник в разъём X9 на плате автопилота.

Процедура связи пульта радиоуправления с приёмником описана в разделе :doc:`Связь пульта с приёмником <../../remote-controller/rc_connection>` 

.. important:: Обратите внимание! Пульт радиоуправления должен поддерживать протокол используемый приёмником. В документации рассмотрен комплектный пульт FlySky FS-i6s и приёмник FlySky-A8S общающиеся по протоколу AFHDS2. В случае использования других устройств - для проверки совместимости обратитесь к документации на оффициальном сайте производителя.

.. attention:: Чтобы избежать ситуации одновременного управления несколькими квадрокоптерами с одного пульта, разрешается связывать только один пульт с одним приемником. 
