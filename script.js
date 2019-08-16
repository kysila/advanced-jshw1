/*
1. Создаем функцию класса
2. Создаем обработку размера
3. Создаем обработку начинки
4. Создаем метод получения размера
5. Метод получения начинок
6. Создать методы добавлнеия и удаления начинки
7. Добавление дополнительных топингов
7.1 Получение топингов
7.2 Добавление / удаление топингов
8. Метод получения цены
9. Метод получения каллорий
 */


Hamburger.SIZE_SMALL = {
    name: 'small',
    type: 'size',
    price: 50,
    calorie: 20,
};

Hamburger.SIZE_LARGE = {
    name: 'large',
    type: 'size',
    price: 100,
    calorie: 40,
};

Hamburger.STUFFING_CHEESE = {
    name: 'cheese',
    type: 'stuffing',
    price: 10,
    calorie: 20,
};

Hamburger.STUFFING_SALAD = {
    name: 'salad',
    type: 'stuffing',
    price: 20,
    calorie: 5,
};

Hamburger.STUFFING_POTATO = {
    name: 'potato',
    type: 'stuffing',
    price: 15,
    calorie: 10,
};

Hamburger.TOPPING_MAYO= {
    name: 'mayo',
    type: 'topping',
    price: 20,
    calorie: 5,
};

Hamburger.TOPPING_SPICE = {
    name: 'spice',
    type: 'topping',
    price: 15,
    calorie: 0,
};


function Hamburger(size, stuffing) {

    try {
        if (size && size.type === 'size') {
            this._size = size;
        } else {
            throw 'Need size Object';
        }
    } catch (err) {
        alert(err);
    }

    try {
        if (stuffing && stuffing.type === 'stuffing') {
            this._stuffing = [];
            this._stuffing.push(stuffing);
        } else {
            throw 'Need stuffing Object';
        }
    } catch (err) {
        alert(err);
    }
    
    this._topping = [];
}

Hamburger.prototype.getSize = function () {
    console.log(this._size.name);
};

Hamburger.prototype.getStuffing = function () {
    var stuffingString = this._stuffing.reduce(function (total, previousValue) {
         total.push(previousValue.name);
         return total;
    }, []);
    console.log(stuffingString.join(','));
};

Hamburger.prototype.addStuffing = function (stuffing) {
    try {
        if (stuffing && stuffing.type === 'stuffing') {
            var isExist = this._stuffing.find(function (item) {
                return stuffing.name === item.name;
            });
            if (!isExist) {
                this._stuffing.push(stuffing);
                console.log(this._stuffing);
            }
        } else {
            throw 'element is exist';
        }
    } catch (err) {
        alert(err);
    }
};

Hamburger.prototype.removeStuffing = function (stuffing) {
    try {
        if (stuffing && stuffing.type === 'stuffing') {
            var isExist = this._stuffing.findIndex(function (item) {
                return stuffing.name === item.name;
            });
            console.log(isExist);
            if (isExist >= 0) {
                this._stuffing.splice(isExist, 1);
                console.log(this._stuffing);
            }
        } else {
            throw 'element is not exist';
        }
    } catch (err) {
        alert(err);
    }
};

Hamburger.prototype.getTopping = function () {
    var toppingString = this._topping.reduce(function (total, previousValue) {
        total.push(previousValue.name);
        return total;
    }, []);
    console.log(toppingString.join(','));
};

Hamburger.prototype.addTopping = function (topping) {
    try {
        if (topping && topping.type === 'topping') {
            var isExist = this._topping.find(function (item) {
                return topping.name === item.name;
            });
            if (!isExist) {
                this._topping.push(topping);
                console.log(this._topping);
            }
        } else {
            throw 'element is exist';
        }
    } catch (err) {
        alert(err);
    }
};

Hamburger.prototype.removeTopping = function (topping) {
    try {
        if (topping && topping.type === 'topping') {
            var isExist = this._topping.findIndex(function (item) {
                return topping.name === item.name;
            });
            console.log(isExist);
            if (isExist >= 0) {
                this._topping.splice(isExist, 1);
                console.log(this._topping);
            }
        } else {
            throw 'element is not exist';
        }
    } catch (err) {
        alert(err);
    }
};

// Calculate price

Hamburger.prototype.calculatePrice = function () {
    var totalPrice = 0;
    totalPrice += this._size.price;
    totalPrice += this._stuffing.reduce(function (total, item) {
        return total + item.price;
    }, 0);
    totalPrice += this._topping.reduce(function (total, item) {
        return total + item.price;
    }, 0);
    return totalPrice;
};

// Calculate calories

Hamburger.prototype.calculateCalories = function () {
    var totalCalories = 0;
    totalCalories += this._size.calorie;
    totalCalories += this._stuffing.reduce(function (total, item) {
        return total + item.calorie;
    }, 0);
    totalCalories += this._topping.reduce(function (total, item) {
        return total + item.calorie;
    }, 0);
    return totalCalories;
};

let burger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

burger.getSize();
burger.getStuffing();
burger.addStuffing(Hamburger.STUFFING_SALAD);
burger.addStuffing(Hamburger.STUFFING_POTATO);
burger.removeStuffing(Hamburger.STUFFING_SALAD);
burger.addTopping(Hamburger.TOPPING_SPICE);
burger.getTopping();
burger.removeTopping(Hamburger.TOPPING_SPICE);
console.log(burger.calculatePrice());
console.log(burger.calculateCalories());