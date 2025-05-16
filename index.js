
const moviesContainer = document.querySelector("#moviesContainer");
const searchBtn = document.querySelector("#searchBtn");

const input = document.querySelector("#search");
const api_key = "f77ffb7d";


searchBtn.addEventListener("click", function () {
    allData();
});


async function allData() {

    moviesContainer.innerHTML = "<p style='color: #4caf50; margin-top: 10px; '>Loading...</p>";

    const url = `https://www.omdbapi.com/?apikey=${api_key}&s=${input.value}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            renderData(data.Search.slice(0, 5));
        } else {
            alert("No movies found");
            moviesContainer.innerHTML = "";

        }
    } catch (error) {
        console.log("error", error);
        alert("Movie error");
        moviesContainer.innerHTML = "";
    }

    input.value = "";
}

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        allData();
    }
});

function renderData(movies) {
    moviesContainer.innerHTML = ""; // Clear previous results

    movies.forEach(el => {


        const row = `
        <tr>
      <td><img src="${el.Poster}" alt="Poster" width="100"></td>
      <td>${el.Title}</td>
      <td>${el.Year}</td>
    </tr>


        
        `;
        moviesContainer.innerHTML += row;


    });
}



// 
