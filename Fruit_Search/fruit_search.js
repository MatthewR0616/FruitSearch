

const input = document.querySelector('#fruit');
const autocompleteDropdown = document.querySelector('.autocomplete-dropdown');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    let results = [];

    if (str.length > 0) {
        results = fruit.filter(f => f.toLowerCase().includes(str.toLowerCase()));
    }

    return results;
}

function searchHandler(e) {
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results);
}

function showSuggestions(results) {
    const dropdownList = autocompleteDropdown;
    dropdownList.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            li.addEventListener('click', () => useSuggestion(result));
            dropdownList.appendChild(li);
        });

        autocompleteDropdown.style.display = 'block';
    } else {
        autocompleteDropdown.style.display = 'none';
    }
}

function useSuggestion(result) {
    input.value = result;
    autocompleteDropdown.style.display = 'none';
}

document.addEventListener('click', (e) => {
    if (!e.target.matches('.autocomplete')) {
        autocompleteDropdown.style.display = 'none';
    }
});

input.addEventListener('input', searchHandler);
