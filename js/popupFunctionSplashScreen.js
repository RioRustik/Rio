;(function() {

	let overlay	= document.querySelector('.overlay1'),
	// 	mOpen	= document.querySelectorAll('input[data-modal="modal_11"]'),
		mClose	= document.querySelectorAll('[data-close]'),
		mStatus	= false;

	// if (mOpen.length == 0) return;

	// [].forEach.call(mOpen, function(el) {
	// 	el.addEventListener('click', function(e) {
	// 		let modalId	= el.getAttribute('data-modal'),
	// 			modal = document.getElementById(modalId);

	// 		modalShow(modal);
	// 	});
	// });

	for (let el of mClose) {
		el.addEventListener('click', modalClose);
	}

	// [].forEach.call(mClose, function(el) {
	// 	el.addEventListener('click', modalClose);
	// });
	
	document.addEventListener('keydown', modalClose);

	document.getElementById("zaz").onclick = function() {
		if(document.getElementById('zaz').onclick){ 
			// function modalShow(modal) {
				overlay.classList.remove('fadeOut1');
				overlay.classList.add('fadeIn1');
				mStatus = true;
			// }
		}
	}

	function modalClose(event) {
		if (mStatus) {
			overlay.classList.remove('fadeIn1');
			overlay.classList.add('fadeOut1');
			mStatus = false;
		}
	}
})();