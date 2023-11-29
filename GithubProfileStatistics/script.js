let searchBtn = document.getElementById("searchBtn");
let searchValue = document.getElementById("searchValue");
let card = document.getElementById("card");
let load = document.getElementById("load");
let decor = document.getElementById("decor");

let dataCard;

searchBtn.addEventListener("click", getCard);

async function getCard() {
    decor.classList.add("d-none");
    load.classList.remove("d-none");
    card.classList.add("d-none");
    const response = await fetch(
        `https://api.github.com/users/${searchValue.value}`
    );
    if (response.ok){
        dataCard = await response.json();
        console.log('Got data', dataCard);
        generateCard();
    }
    else{
        decor.classList.remove("d-none");
    }
    load.classList.add("d-none");
    searchValue.value = "";
}

function generateCard(){
    card.innerHTML = `
        <img src="${dataCard.avatar_url}">
        <h1>${dataCard.login}</h1>
        <p>${dataCard.bio}</p>
        <nav>
            <div class="text-blue">
                <i class="fas fa-map-marker-alt"></i>
                <span>${dataCard.location}</span>
            </div>
            <div class="text-red">
                <i class="fas fa-heart"></i>
                <span>${dataCard.followers}</span>
            </div>
            <div class="text-yellow">
                <i class="fas fa-star"></i>
                <span>${dataCard.following}</span>
            </div>
            <div class="text-green">
                <i class="fas fa-book"></i>
                <span>${dataCard.public_repos}</span>
            </div>
        </nav>
        <a href="${dataCard.html_url}">Show profile page</a>
    `;
    card.classList.remove("d-none");
}