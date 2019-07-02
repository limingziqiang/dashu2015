var supportsPassiveOption = false;
	try {
		var opts = Object.defineProperty({}, 'passive', {
			get: function() {
				supportsPassiveOption = true;
			}
		});
		window.addEventListener('test', null, opts);
	} catch (e) {}
