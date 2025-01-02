  document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

    function loadPage(url) {
      console.log("Loading URL:", url);

      if (!url) return;

      fetch(url)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/html');
          const newContent = doc.getElementById('content').innerHTML;

          // Replace content
          contentDiv.innerHTML = newContent;

          // Update buttons
          document.getElementById('prevBtn').dataset.url = doc.querySelector('#prevBtn').dataset.url || '';
          document.getElementById('prevBtn').disabled = !doc.querySelector('#prevBtn').dataset.url;

          document.getElementById('nextBtn').dataset.url = doc.querySelector('#nextBtn').dataset.url || '';
          document.getElementById('nextBtn').disabled = !doc.querySelector('#nextBtn').dataset.url;
        });
    }

    document.getElementById('prevBtn').addEventListener('click', (event) => loadPage(event.target.dataset.url));
    document.getElementById('nextBtn').addEventListener('click', (event) => loadPage(event.target.dataset.url));
  });
