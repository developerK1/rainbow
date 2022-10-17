//updating the copyright year
(function(){
	const currentYear = document.querySelector(".year" );

	let thisYear = new Date();
	let newYear = thisYear.getFullYear();

	currentYear.textContent = newYear ;
	currentYear.innerText = newYear;
}());

//POP UP GALLERY IMAGE
$(function() {

      $("#portfolio").magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image',
          gallery: {
              enabled: true
          }
      });
});


//toggling an active state on the menu links
$(document).on('click', 'ul li', function(){
	$(this).addClass('active').siblings().removeClass('active');
});


/*toggling the current link state
const menuHover = document.querySelector('ul');
const currentLi = document.querySelector('.at-page');

menuHover.addEventListener('mouseover', ()=>{
	currentLi.classList.remove('at-page');
});

menuHover.addEventListener('mouseout', ()=>{
	currentLi.classList.add('at-page');
});
*/

//navbar icon animations
const navbar = document.querySelector('.navbar-toggler');
const icon = document.querySelector('.navbar-toggler-icon');

navbar.addEventListener('click', pressed);

function pressed(){
	navbar.classList.toggle('openn');
	icon .classList.toggle('openn-icon');
	navbar.style.transition = " 0.6s ease" ;
	icon.style.transition = " 1s ease" ;
}

/* =============================================================== */
//LIGHTBOX GALLERY POP UP

$(document).on('click', '[data-toggle="lightbox"]', function(event){
		event.preventDefault();
		$(this).ekkoLightbox();
	});
/* ====================================================== ========================================= */



/* ====================================================== =========================================

								SEVICE HOVER FUNCTIOPNALITY

 ====================================================== ========================================= */



/* ====================================================== =========================================

								expand and columps button read more

const closedPara = document.querySelector(".closed");

	const expandBtns = document.querySelector"button");

	expandBtn.addEventListener("click",expand);


	function expand(){

		let prevElement = this.previousElementSibling;

		if(prevElement.style.display == "none" ){
			prevElement.style.display = "block ";
			prevElement.style.transition = "display 2s ease-in-out";
		}else {
			prevElement.style.display = "none";
		}

	}


	//muliyple buttons ==========================
	const expandBtns = document.querySelectorAll("button");

	expandBtns.forEach((btn)=>{
		btn.addEventListener("click",expand);
	});




*/

	//toggling the current link state
const menuHover = document.querySelector('ul');
const currentLi = document.querySelector('.at-page');

menuHover.addEventListener('mouseover', ()=>{
	currentLi.classList.remove('at-page');
});

menuHover.addEventListener('mouseout', ()=>{
	currentLi.classList.add('at-page');
});


// ===================================================================
// 			MAP DIRECTION LOGICS
// ===================================================================
const direcBtn = document.querySelector("#adress a");
const text = "https://www.google.com/maps/dir//Dinokana+2868/@-25.4432013,25.8640062,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x1ebcd74e65f1d201:0x5bca1fdebf5ea66a";
let textInt = "https://www.google.com/maps/dir//" ;
let textFin = "/@-25.4432013,25.8640062,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x1ebcd74e65f1d201:0x5bca1fdebf5ea66a";

//ONLOAD STROE THE CURRENT LINK
direcBtn.addEventListener("click", function(){
	let distination;
	let currentUrl = window.location.href;//Manupulate the strings


	if( currentUrl == "http://localhost/shazz/internet.cafe.php"){
		distination = textInt + "Dinokana+2868" + textFin;
		this.href= distination;

	}else if(currentUrl == "http://localhost/shazz/index.php"){
		distination = textInt + "Zeerust+2868" + textFin;
		this.href= distination;
	}else{
		this.href= "404.html";
	}
})





/* =============================================================

================================================================== */
const portAnchors = document.querySelectorAll(".portfolio .row img");

portAnchors.forEach(item => {
	item.style.pointerEvent = "none";
	console.log("all there")
});
