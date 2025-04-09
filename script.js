document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const blogCards = document.querySelectorAll(".blog-card");

    searchButton.addEventListener("click", function () {
        let query = searchInput.value.toLowerCase();

        blogCards.forEach(card => {
            let title = card.querySelector("h2").textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
    
    blogCards.forEach(card => {
        card.addEventListener("click", function () {
            let title = card.querySelector("h2").textContent;
            let description = card.querySelector("p").textContent;
            alert(`Event: ${title}\n\n${description}`);
        });
    });
    const darkModeButton = document.createElement("button");
    darkModeButton.textContent = "Toggle Dark Mode";
    darkModeButton.id = "dark-mode-toggle";
    darkModeButton.style.cssText = "position:fixed;bottom:20px;right:20px;padding:10px;background:#333;color:#fff;border:none;cursor:pointer;border-radius:5px;";
    document.body.appendChild(darkModeButton);

    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

});
