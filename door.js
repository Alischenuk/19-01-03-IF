let doorLocked = true;
let signalinOff = true;

if (!doorLocked) {
    if (!signalinOff) {
        console.log('Дверь открыта, тревога!');
    } else {
        console.log('Дверь открыта, без сигнала тревоги');
    }
} else if (!signalinOff) {
        console.log('Сработала сигнализация при закрытой двери');
    } else {
        console.log('Дверь закрыта, все хорошо');
    }