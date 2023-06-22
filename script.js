// const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c683f9d444msh815ca28deb00295p1208e1jsn01c0a8a930c4',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};

// searchinput
// searchbtn
const dictionary = (word) => {
	fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
		.then((res) => res.json())
		.then((res) => {
			console.log(res)
			wordheading.innerHTML ="Meaning of  : " + res.word;
			definition.innerHTML = res.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.")
		}).catch((err) => {
			console.error(err)
		})
}

searchbtn.addEventListener("click", (e) => {
	e.preventDefault()
	dictionary(searchinput.value)
})
