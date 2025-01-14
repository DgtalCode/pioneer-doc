Объект Timer | Управление таймерами
-----------------------------------

    .. function:: Timer.new(sec, func)

        Cоздать новый Timer.

        :param sec: время интервала в секундах;
        :param func: функция, которая будет вызываться с заданным интервалом.

    .. function:: Timer.start(self)

        Запуcкает таймер.

    .. function:: Timer.stop(self)

        Останавливает таймер. При этом остановка уже запущенного таймера произойдет после выполнения функции, стоящей в очереди на выполнение.

    .. function:: Timer.callAt(local_time, func)

        Cоздает и запускает новый Timer с функцией, которая будет вызвана один раз.

        :param local_time: локальное время (возвращаемое функцией :func:`time`), указывающее момент вызова функции;
        :param func: функция, которая будет вызвана.

    .. function:: Timer.callLater(delay, func)

        Cоздает и запускает новый Timer с функцией, которая будет вызвана один раз.

        :param delay: время, через которое будет вызвана функция;
        :param func: функция, которая будет вызвана.

    .. function:: Timer.callAtGlobal(global_time, func)

        Cоздает и запускает новый Timer с функцией, которая будет вызвана один раз.

        :param global_time: глобальное время (:func:`time` + :func:`deltaTime`), указывающее момент вызова функции;
        :param func: функция, которая будет вызвана.

    .. note::

        При использовании функций :func:`callAt`, :func:`callLater`, :func:`callAtGlobal` следует обратить внимание,
        что может быть не более 16 одновременно ожидающих таймеров. Если количество одновременно ожидающих таймеров больше 16, то новый таймер не будет создан.