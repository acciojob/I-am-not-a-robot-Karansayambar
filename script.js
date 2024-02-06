//your code here
const imgs = document.querySelectorAll(".img");

imgs.forEach(img => {
	img.addEventListener("click", () => {
		const border = img.style.border;
		if(border !== '5px solid red'){
			img.style.border = '5px solid red';
		}else{
			img.style.border = '5px solid gray';
		}
	});
})



