import Matreshka from 'matreshka-prod';
import Matreshka2 from 'matreshka-prod-min';

let $ = Matreshka.$b,
	$2 = Matreshka2.$b,
	Class = Matreshka.Class,
	Class2 = Matreshka2.Class;


describe('matreshka.js and matreshka.min.js load', () => {
	it('imports AMD modules in ES2015 style from matreshka.js', () => {
        expect(typeof Matreshka == 'function').toBe(true);
		expect(typeof $ == 'function').toBe(true);
		expect(typeof Class == 'function').toBe(true);
    });

	it('imports AMD modules in ES2015 style from matreshka.min.js', () => {
        expect(typeof Matreshka2 == 'function').toBe(true);
		expect(typeof $2 == 'function').toBe(true);
		expect(typeof Class2 == 'function').toBe(true);
    });

	it('imports AMD module from matreshka.js', done => {
		require(['matreshka-prod'], function(Matreshka) {
			expect(typeof Matreshka == 'function').toBe(true);
			done();
		});
	});

	it('imports AMD module from matreshka.min.js', done => {
		require(['matreshka-prod-min'], function(Matreshka) {
			expect(typeof Matreshka == 'function').toBe(true);
			done();
		});
	});

	it('imports CJS module from matreshka.js', done => {
		let iframe = document.createElement('iframe'),
			src = require.toUrl("matreshka-prod") + '.js';

		iframe.onload = () => {
			let win = iframe.contentWindow,
				script = win.document.createElement('script');


			setTimeout(() => {
				expect(typeof win.module.exports.Matreshka == 'function').toBe(true);
				document.body.removeChild(iframe);
				done();
			}, 100);

			script.src = src;
			win.module = {exports: {}};
			win.exports = win.module.exports;

			win.document.body.appendChild(script);
		}

		document.body.appendChild(iframe);
    });


	it('imports CJS module from matreshka.min.js', done => {
		let iframe = document.createElement('iframe'),
			src = require.toUrl("matreshka-prod-min") + '.js';



		iframe.onload = () => {
			let win = iframe.contentWindow,
				script = win.document.createElement('script');



			setTimeout(() => {
				expect(typeof win.module.exports.Matreshka == 'function').toBe(true);
				document.body.removeChild(iframe);
				done();
			}, 100);

			script.src = src;
			win.module = {exports: {}};
			win.exports = win.module.exports;

			win.document.body.appendChild(script);

		}

		document.body.appendChild(iframe);

    });


	it('loads global variables if there is no CJS or AMD stuff for matreshka.js', done => {
		let iframe = document.createElement('iframe'),
			src = require.toUrl("matreshka-prod") + '.js';


		iframe.onload = () => {
			let win = iframe.contentWindow,
				script = win.document.createElement('script');


			setTimeout(() => {
				expect(typeof win.Matreshka == 'function').toBe(true);
				expect(typeof win.MK == 'function').toBe(true);
				expect(typeof win.$b == 'function').toBe(true);
				expect(typeof win.Class == 'function').toBe(true);
				document.body.removeChild(iframe);
				done();
			}, 100);


			script.src = src;

			win.document.body.appendChild(script);

		}

		document.body.appendChild(iframe);
    });

	it('loads global variables if there is no CJS or AMD stuff for matreshka.min.js', done => {
		let iframe = document.createElement('iframe'),
			src = require.toUrl("matreshka-prod-min") + '.js';


		iframe.onload = () => {
			let win = iframe.contentWindow,
				script = win.document.createElement('script');

			setTimeout(() => {
				expect(typeof win.Matreshka == 'function').toBe(true);
				expect(typeof win.MK == 'function').toBe(true);
				expect(typeof win.$b == 'function').toBe(true);
				expect(typeof win.Class == 'function').toBe(true);
				document.body.removeChild(iframe);
				done();
			}, 100);


			script.src = src;

			win.document.body.appendChild(script);

		}

		document.body.appendChild(iframe);
    });
});
