// github contributors fetch

document.addEventListener("DOMContentLoaded", function () {
  // Fetch contributors from GitHub API
  fetch("https://api.github.com/repos/randilt/cyberscourge-hub/contributors")
    .then((response) => response.json())
    .then((contributors) => {
      // Display contributors
      const contributorsDiv = document.getElementById("contributors");
      contributors.forEach((contributor) => {
        contributorsDiv.innerHTML += `<p>${contributor.login}</p>`;
      });
    })
    .catch((error) => console.error("Error fetching contributors:", error));
});
