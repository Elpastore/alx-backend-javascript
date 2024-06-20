class Myclass {
    constructor () {
        console.log('initiate');
    }

    add(arg1, arg2) {
        return arg1 + arg2;
    }

    subs(arg1, arg2) {
        return arg1 - arg2;
    }

    multiple(arg1, arg2) {
        return arg1 * arg2;
    }
}

module.exports = Myclass;