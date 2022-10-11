const headerNode = document.querySelector('.header');
const headerThemeNode = document.querySelector('.header__theme');
const headerBurgerNode = document.querySelector('.header__burger');
const headerNavNode = document.querySelector('.header__nav');
const headerNavLinkNodes = document.querySelectorAll('.header__nav-link');

function headerThemeClickHandler(event) {
	
	if (document.body.classList.contains('theme-light')) {
		document.body.classList.remove('theme-light');
		document.body.classList.add('theme-dark');
	} else if (document.body.classList.contains('theme-dark')) {
		document.body.classList.remove('theme-dark');
		document.body.classList.add('theme-light');
	}

}

function headerBurgerClickHandler(event) {
	
	if (headerNode.classList.contains('header_menu-open')) {
		animCloseHeaderNav();
	} else {
		animOpenHeaderNav();
	}

}

const obj = {
	'sadsa-123!@#!   a2131': 1
}

const str = 'sadsa-123!@#!   a2131';
console.log(obj[str]);

function animCloseHeaderNav() {
	const transitionDuration = gsap.getProperty(document.documentElement, '--transitionDuration');

	gsap.to(headerNavNode, { opacity: 0, duration: transitionDuration, onComplete: () => {
		document.body.classList.remove('overflow-y-hidden');
		headerNode.classList.remove('header_menu-open');
		gsap.set(headerNavNode, { opacity: 1 });
	}});
}

function animOpenHeaderNav() {
	const transitionDuration = gsap.getProperty(document.documentElement, '--transitionDuration');

	gsap.set(headerNavNode, { opacity: 0 });
	headerNode.classList.add('header_menu-open');
	document.body.classList.add('overflow-y-hidden');
	gsap.to(headerNavNode, { opacity: 1, duration: transitionDuration });
}

function headerNavLinkCLickHandler(event) {
	animCloseHeaderNav();
}

headerThemeNode.addEventListener('click', headerThemeClickHandler);
headerBurgerNode.addEventListener('click', headerBurgerClickHandler);

for (let i = 0; i < headerNavLinkNodes.length; i++) {
	headerNavLinkNodes[i].addEventListener('click', headerNavLinkCLickHandler);
}



