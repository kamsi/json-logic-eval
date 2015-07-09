'use strict';

module.exports = function (t, a) {
    var neg, or, and;

    neg = {"operator": "neg", vals: true};
    or = {"operator": "or", vals: [true, true]};
    and = {"operator": "and", vals: [true, true]};
//not
    a(t.logicEval(neg), false);
    neg.vals = false;
    a(t.logicEval(neg), true);
//or
    a(t.logicEval(or), true);
    or.vals = [false, true];
    a(t.logicEval(or), true);
    or.vals = [true, false];
    a(t.logicEval(or), true);
    or.vals = [true, true];
    a(t.logicEval(or), true);
//and
    a(t.logicEval(and), true);
    and.vals = [false, true];
    a(t.logicEval(and), false);
    and.vals = [true, false];
    a(t.logicEval(and), false);
    and.vals = [false, false];
    a(t.logicEval(and), false);

    neg.vals = and;
    a(t.logicEval(neg), true);
    neg.vals = or;
    a(t.logicEval(neg), false);
    or.vals[0] = and;
    or.vals[1] = { "operator": "neg", vals: and };
//excludedMiddle
    a(t.logicEval(or), true);
};
