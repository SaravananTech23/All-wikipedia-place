document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value;
  if (!query) return alert("Please enter a name.");

  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => {
      if (data.extract) {
        document.getElementById("result").innerHTML = `
          <h2>${data.title}</h2>
          <p>${data.extract}</p>
          <a href="${data.content_urls.desktop.page}" target="_blank">Read more on Wikipedia</a>
        `;
      } else {
        document.getElementById("result").innerHTML = "<p>No details found.</p>";
      }
    })
    .catch(err => {
      document.getElementById("result").innerHTML = "<p>Error fetching details.</p>";
      console.error(err);
    });
});
