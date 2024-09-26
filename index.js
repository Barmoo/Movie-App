//grab fetch-button 
const fetchButton = document.querySelector('#fetch-button');

async function pastActors(){
    const resultContainer = document.querySelector('#result');
    resultContainer.innerHTML = '';
    const url = 'https://moviesdatabase.p.rapidapi.com/actors/random';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ba3bd69651msh2badcf1cedc216bp1e228fjsn5bd8a6f50d67',
            'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result.results);
        const data = result.results;
        console.log(data.length);

        if(data.length <= 0){
            resultContainer.innerHTML = 'no results found';
            return;
        }
        data.forEach((actor) => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('resultstyle');
            resultDiv.innerHTML = `
            <h4>${actor.primaryName}</h4>
            <p>${actor.primaryProfession}</p>
            `;
            resultContainer.appendChild(resultDiv);
            
        });


    } catch (error) {
        console.error(error);
    }

}

fetchButton.addEventListener('click',pastActors);


