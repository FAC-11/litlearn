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
    shadeOverlay.className = 'lit-green';
		shadeOverlay.style.cssText = "position: absolute; top: 0%; left: 0%; width: 100%; height: "+page_height()+"px; z-index:1001; -moz-opacity: 0.8; opacity:.80; filter: alpha(opacity=80);";
		body.appendChild(shadeOverlay);

		modal = document.createElement('div');
    modal.id = 'modal';
		modal.style.cssText = "position: absolute; top: 10%; left: 10%; width: 80%; height: 80%; padding: 0px; border: 2px solid #666; background-color: #fff; z-index:1002; overflow: auto; padding: 12px 2px 2px 2px;";
		modal.textContent = html;
		body.appendChild(modal);

		var a = document.createElement('a');
		a.textContent = 'X';
		a.setAttribute('href', '#');
		a.style.cssText = 'display:block; color: #000; background:#ccc; text-decoration: none; font-size: 12px; height: 12px; padding: 0px 1px 0px 2px; border: 1px solid #000';
		a.onclick = closeHint;

		var closeyX = document.createElement('div');
		closeyX.appendChild(a);
		closeyX.style.cssText = "position: absolute; right: 1px; top: 1px;";
		modal.appendChild(closeyX);

		window.scrollTo(0,0);     //Test this!
	}

document.getElementById('lightbulb').addEventListener ('click', (event) => {
    openHint (event.target.dataset.hintHtml);
    // openHint ();
});
