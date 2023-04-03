// List of fruits
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
// console.log( fruit );

// Input reference
// <input type="text" name="fruit" id="fruit" placeholder="Search fruit 🍎">
const input = document.getElementById('fruit');

// <div class="suggestions">
const suggestions = document.querySelector('.suggestions');

input.addEventListener('keyup', () => {
	let results = [];
	let key = input.value;

	if ( key.length ) {
		results = fruit.filter( (term) => {
			return term.toLowerCase().includes( key.toLowerCase());
		});

		displaySuggestions(results);
	}

});// Call searchHandler( e )

suggestions.addEventListener('click', useSuggestion);

function displaySuggestions( arr ) {
	const results = arr.map( (li) => {
		return `<li>${li}</li>`;
	});

	suggestions.innerHTML = `<ul>${results.join('')}</ul>`;
}

function useSuggestion( event ) {
	const key = event.target;
	input.value = key.innerHTML;
	suggestions.innerHTML = '';
}


