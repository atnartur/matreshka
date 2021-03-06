'use strict';

define(['matreshka', 'bquery'], function (MK, $) {
    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    describe('Getting bound nodes', function () {
        it('nodes and $nodes exist', function () {
            var node = $.create('div'),
                mk = new MK();
            mk.bindNode('x', node);
            expect(mk.nodes.x).toEqual(node);
            expect(mk.$nodes.x[0]).toEqual(node);
        });
        it('sandbox and $sandbox exist', function () {
            var node = $.create('div'),
                mk = new MK();
            mk.bindNode('sandbox', node);
            expect(mk.sandbox).toEqual(node);
            expect(mk.$sandbox[0]).toEqual(node);
        });
        it('bound and $bound work', function () {
            var node1 = $.create('div'),
                node2 = $.create('div'),
                mk = new MK();
            mk.bindNode('x', node1);
            mk.bindNode('y', node2);
            expect(mk.bound('x')).toEqual(node1);
            expect(mk.$bound('x')[0]).toEqual(node1);
            expect(mk.bound('x y')).toEqual(node1);
            expect([].concat(_toConsumableArray(mk.$bound('x y')))).toEqual([node1, node2]);
        });
        it('bound and $bound work with no argument', function () {
            var node = $.create('div'),
                mk = new MK();
            mk.bindNode('sandbox', node);
            expect(mk.bound()).toEqual(node);
            expect(mk.$bound()[0]).toEqual(node);
        });
        it('bound and $bound work with deep bindings', function () {
            var node = $.create('div'),
                o = {
                a: {
                    b: {
                        c: {}
                    }
                }
            };
            MK.bindNode(o, 'a.b.c', node);
            expect(MK.bound(o, 'a.b.c')).toEqual(node);
            expect(MK.$bound(o, 'a.b.c')[0]).toEqual(node);
        });
        it('selects elements via select & selectAll', function () {
            var node = $.create('div', {
                children: [{
                    tagName: 'span'
                }, {
                    tagName: 'span'
                }]
            }),
                o = {};
            MK.bindNode(o, 'sandbox', node);
            expect([].concat(_toConsumableArray(MK.selectAll(o, ':sandbox span')))).toEqual([].concat(_toConsumableArray($('span', node))));
            expect(MK.select(o, ':sandbox span')).toEqual($('span', node)[0]);
            expect([].concat(_toConsumableArray(MK.selectAll(o, ':sandbox')))).toEqual([node]);
            expect(MK.select(o, ':sandbox')).toEqual(node);
            expect([].concat(_toConsumableArray(MK.selectAll(o, ':sandbox > span')))).toEqual([].concat(_toConsumableArray($('span', node))));
            expect(MK.select(o, ':sandbox > span')).toEqual($('span', node)[0]);
        });
    });
});
