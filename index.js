'use strict';

module.exports = {
    logicOperators: {
        neg: function (expr) {
            return !this.logicEval(expr);
        },
        or: function () {
            var result = this.logicEval(arguments[0]), args;
            args = Array.prototype.slice.call(arguments, 1);
            args.forEach(function (arg) {
                result = result || this.logicEval(arg);
            }, this);
            return result;
        },
        and: function () {
            var result = this.logicEval(arguments[0]), args;
            args = Array.prototype.slice.call(arguments, 1);
            args.forEach(function (arg) {
                result = result && this.logicEval(arg);
            }, this);
            return result;
        }
    },
    logicEval: function (expr) {
        if (typeof expr === 'boolean') {
            return expr;
        }
        if (typeof this.logicOperators[expr.operator] !== 'function') {
            throw new Error('logicEval expects logic function, ' + typeof this.logicOperators[expr.operator] + ' given.');
        }
        if (expr.vals instanceof Array) {
            return this.logicOperators[expr.operator].apply(this, expr.vals);
        }
        return this.logicOperators[expr.operator].call(this, expr.vals);
    }
};
