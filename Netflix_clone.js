
// Movie Data
const movies = [
    {
        title: "Avengers Endgame",
        year: 2019,
        category: "Action",
        rating: "8.4",
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description: "The Avengers assemble once again to defeat Thanos and save the universe."
    },
    {
        title: "The Dark Knight",
        year: 2008,
        category: "Action",
        rating: "9.0",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "Batman faces his greatest enemy, the Joker, in Gotham City."
    },
    {
        title: "Spider-Man",
        year: 2021,
        category: "Action",
        rating: "8.2",
        image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        description: "A young superhero discovers the responsibilities of having extraordinary powers."
    },
    {
        title: "Inception",
        year: 2010,
        category: "Action",
        rating: "8.8",
        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        description: "A skilled thief enters people's dreams to steal secrets."
    },
    {
        title: "Interstellar",
        year: 2014,
        category: "Popular",
        rating: "8.7",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "A team of explorers travels beyond this galaxy to save humanity."
    },
    {
        title: "Joker",
        year: 2019,
        category: "Popular",
        rating: "8.4",
        image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        description: "The origin story of a troubled comedian who becomes the Joker."
    },
    {
        title: "Titanic",
        year: 1997,
        category: "Romance",
        rating: "7.9",
        image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        description: "A beautiful love story unfolds aboard the legendary Titanic."
    },
    {
        title: "The Notebook",
        year: 2004,
        category: "Romance",
        rating: "7.8",
        image: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
        description: "Two young people fall deeply in love despite their differences."
    },
    {
        title: "Home Alone",
        year: 1990,
        category: "Comedy",
        rating: "7.7",
        image: "https://image.tmdb.org/t/p/w500/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg",
        description: "A young boy is accidentally left home alone during Christmas."
    },
    {
        title: "The Mask",
        year: 1994,
        category: "Comedy",
        rating: "6.9",
        image: "https://image.tmdb.org/t/p/w500/7bWmb6h1W2xXy8L5Y9JxN7p9K7.jpg",
        description: "A magical mask transforms an ordinary man into a superhero."
    },
    {
        title: "Black Panther",
        year: 2018,
        category: "Action",
        rating: "7.3",
        image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        description: "A young king protects his kingdom of Wakanda."
    },
    {
        title: "Doctor Strange",
        year: 2016,
        category: "Action",
        rating: "7.5",
        image: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
        description: "A surgeon discovers the magical world of mystic arts."
    }
];

// Get HTML elements
const trendingMovies = document.getElementById("trendingMovies");
const popularMovies = document.getElementById("popularMovies");
const actionMovies = document.getElementById("actionMovies");
const romanceMovies = document.getElementById("romanceMovies");
const comedyMovies = document.getElementById("comedyMovies");

const movieModal = document.getElementById("movieModal");
const loginModal = document.getElementById("loginModal");

// Display Movies
function displayMovies(movieList, container) {

    container.innerHTML = "";

    movieList.forEach(movie => {

        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}"
                 onerror="this.src='https://placehold.co/300x450/222/fff?text=Movie'">
            <h3>${movie.title}</h3>
            <p>${movie.year} | IMDb ${movie.rating}</p>
        `;

        card.addEventListener("click", () => {
            showMovieDetails(movie);
        });

        container.appendChild(card);
    });
}

// Display all movie categories
displayMovies(movies.slice(0, 6), trendingMovies);
displayMovies(movies.slice(3, 9), popularMovies);
displayMovies(
    movies.filter(movie => movie.category === "Action"),
    actionMovies
);
displayMovies(
    movies.filter(movie => movie.category === "Romance"),
    romanceMovies
);
displayMovies(
    movies.filter(movie => movie.category === "Comedy"),
    comedyMovies
);

// Movie Details
function showMovieDetails(movie) {

    document.getElementById("modalImage").src = movie.image;
    document.getElementById("modalTitle").textContent = movie.title;

    document.getElementById("modalMeta").textContent =
        `${movie.year} | ${movie.category} | IMDb ${movie.rating}`;

    document.getElementById("modalDescription").textContent =
        movie.description;

    document.getElementById("demoMessage").textContent = "";

    movieModal.classList.add("show");
}

// Close Movie Modal
document.getElementById("closeModal").addEventListener("click", () => {
    movieModal.classList.remove("show");
});

// Hero Play Button
document.getElementById("heroPlay").addEventListener("click", () => {

    showMovieDetails({
        title: "Stranger Things",
        year: 2025,
        category: "Sci-Fi",
        rating: "8.7",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900",
        description: "A mysterious supernatural adventure in a small town."
    });

});

// Hero More Info
document.getElementById("heroInfo").addEventListener("click", () => {

    showMovieDetails({
        title: "Stranger Things",
        year: 2025,
        category: "Sci-Fi",
        rating: "8.7",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900",
        description: "A mysterious supernatural adventure in a small town."
    });

});

// Demo Play Button
document.getElementById("modalPlay").addEventListener("click", () => {

    document.getElementById("demoMessage").textContent =
        "This is a frontend demo. Real movie streaming is not connected.";

});

// Search Functionality
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {

    const searchValue = this.value.toLowerCase().trim();

    const searchSection = document.getElementById("searchSection");
    const searchMovies = document.getElementById("searchMovies");
    const noResults = document.getElementById("noResults");

    if (searchValue === "") {
        searchSection.hidden = true;
        return;
    }

    searchSection.hidden = false;

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchValue) ||
        movie.category.toLowerCase().includes(searchValue)
    );

    displayMovies(filteredMovies, searchMovies);

    noResults.hidden = filteredMovies.length !== 0;

});

// Sign In Modal
document.getElementById("signInBtn").addEventListener("click", () => {
    loginModal.classList.add("show");
});

// Close Login
document.getElementById("closeLogin").addEventListener("click", () => {
    loginModal.classList.remove("show");
});

// Login Form Demo
document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    document.getElementById("loginMessage").textContent =
        `Demo form submitted for ${email}. No account was created.`;

    this.reset();

});

// Signup Link Demo
document.getElementById("signupLink").addEventListener("click", (event) => {

    event.preventDefault();

    document.querySelector(".login-box h2").textContent = "Create Account";

    document.querySelector(".sign-submit").textContent = "Sign Up";

});

// Close modal by clicking outside
window.addEventListener("click", (event) => {

    if (event.target === movieModal) {
        movieModal.classList.remove("show");
    }

    if (event.target === loginModal) {
        loginModal.classList.remove("show");
    }

});

// Close modal using Escape key
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        movieModal.classList.remove("show");
        loginModal.classList.remove("show");
    }

});
