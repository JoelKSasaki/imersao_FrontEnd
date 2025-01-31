const searchInput = document.getElementById('search-input');
const artist = document.getElementById('result-artist');
const playlists = document.getElementById('result-playlists');

function requestAPI(searchterm){
    const url = `http://localhost:3000/artists?name_like=${searchterm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(){
    playlists.classList.add('hidden');
    const artistname = document.getElementById('artist-name');
    const artistimage = document.getElementById('artist-img');

    result.forEach(element => {
        artistname.innerText = element.name;
        artistimage.src = element.urlImg;
    });

    artist.classList.remove('hidden');
}

document.addEventListener('input', function() {
    const searchterm = searchInput.value.toLowerCase();
    if (searchterm === ''){
        playlists.classList.add('hidden');
        artist.classList.remove('hidden');
        return
    }

    requestAPI(searchterm);
})