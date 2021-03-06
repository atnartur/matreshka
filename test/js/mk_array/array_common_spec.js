'use strict';

define(['matreshka'], function (MK) {
	describe('Common tests for MK.Array', function () {
		it('throws error if Model is undefined', function () {
			var bool = false,
			    MyClass = undefined;

			try {
				new MK.Class({
					'extends': MK.Array,
					Model: undefined,
					constructor: function constructor() {
						this._initMK();
					}
				});
			} catch (e) {
				bool = true;
			}

			expect(bool).toEqual(true);
		});
		it('iterates via for..of', function () {
			var arr = new MK.Array(1, 2, 3),
			    i = 1;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var item = _step.value;
					expect(item).toEqual(i++);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator['return']) {
						_iterator['return']();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		});
		it('converts array to MK.Array via "from" method', function () {
			var arr = MK.Array.from([1, 2, 3]),
			    i = 1;
			expect(arr instanceof MK.Array).toBe(true);
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var item = _step2.value;
					expect(item).toEqual(i++);
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2['return']) {
						_iterator2['return']();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		});
		it('converts args to MK.Array via "of" method', function () {
			var arr = MK.Array.of(1, 2, 3),
			    i = 1;
			expect(arr instanceof MK.Array).toBe(true);
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = arr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var item = _step3.value;
					expect(item).toEqual(i++);
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3['return']) {
						_iterator3['return']();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		});
		it('triggers addone and removeone', function () {
			var arr = MK.Array.of(1, 2, 3, 4, 5),
			    i = 0;
			arr.on('addone', function (evt) {
				i++;
				expect(evt.added).toEqual('foo');
			});
			arr.on('removeone', function (evt) {
				i++;
				expect(evt.removed).toEqual(2);
			});
			arr.push('foo');
			arr.pull(1);
		});
	});
});
