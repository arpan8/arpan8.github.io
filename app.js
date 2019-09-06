const navslide = () => {
	const bar = document.querySelector('.bar');
	const nav = document.querySelector('.nav-links');
	const navlinks = document.querySelectorAll('.nav-links li');
	
	bar.addEventListener('click',() =>{
		nav.classList.toggle('nav-active');
	

	navlinks.forEach((link,index)=>{
		if(link.style.animation){
			link.style.animation=''
		}else{
		link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+1}s`;
		}
	});
	});
}

navslide();