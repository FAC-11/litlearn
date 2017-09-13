	function closeHint() {
		document.body.removeChild(document.getElementById ('overlay'));
  	document.body.removeChild(document.getElementById ('modal'));
		return false;
  }

  function page_height() {
    return (window.innerHeight);
  }

//Creates a modal when openHint is called with static HTML html.
//Relies on inheriting a class .lit-green from general CSS giving background-color: #63FFD1


	function openHint (html) {
    const body=document.getElementsByTagName ('body')[0];

		shadeOverlay = document.createElement('div');
    shadeOverlay.id = 'overlay';
		shadeOverlay.onclick = closeHint;
    shadeOverlay.className = 'modal-overlay';
		body.appendChild(shadeOverlay);

		modal = document.createElement('div');
    modal.id = 'modal';
		modal.textContent = html;
		body.appendChild(modal);

		var a = document.createElement('a');
		a.textContent = 'X';
		a.setAttribute('href', '#');
		a.className = 'close-modal';
		a.onclick = closeHint;

		var closeyModal = document.createElement('div');
		closeyModal.appendChild(a);
		closeyModal.className='close-modal';
		modal.appendChild(closeyModal);
	}

document.getElementById('lightbulb').addEventListener ('click', (event) => {
    openHint (event.target.dataset.hintContent);
    // openHint ();
});
