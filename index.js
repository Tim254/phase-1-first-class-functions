function receivesAFunction(callback) {
    callback()
}
function returnsANamedFunction() {
    return function fn() {
        return "before all"
    }
}
function returnsAnAnonymousFunction() {
    return (function () {
        return "before all"
    })
}