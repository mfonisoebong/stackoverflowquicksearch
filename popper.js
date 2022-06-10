const form= document.querySelector('form')
const search= document.getElementById('search')
const submitBtn= document.getElementById('submit-btn')
const error= document.getElementById('error')

// stop form execution

form.addEventListener('submit', (e)=>{
	e.preventDefault()
})

submitBtn.addEventListener('click', ()=>{

	if(search.value.trim()===''){
		search.style.border= '1px solid red'
	}
	else{
		// Create a new tab with the stackoverflow search url
		chrome.tabs.create({
			url: `https://stackoverflow.com/search?q=${search.value.trim()}&s=a971d4fe-9098-49c2-a225-53780c495d01`
		  });
	}

})