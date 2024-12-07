const form = document.getElementById('diary-form');
const diaryEntriesContainer = document.getElementById('diary-entries');
const loadMoreButton = document.getElementById('load-more');

let entries = [];
let displayCount = 3;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const newEntry = {
    date: new Date().toLocaleDateString(),
    action: form.action.value,
    phenomenon: form.phenomenon.value,
    discovery: form.discovery.value,
    declaration: form.declaration.value,
  };

  entries.unshift(newEntry);
  form.reset();
  renderEntries();
});

function renderEntries() {
  diaryEntriesContainer.innerHTML = '';
  const visibleEntries = entries.slice(0, displayCount);
  visibleEntries.forEach(entry => {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('diary-entry');
    entryDiv.innerHTML = `
      <p><strong>${entry.date}</strong></p>
      <p><strong>行为:</strong> ${entry.action}</p>
      <p><strong>现象:</strong> ${entry.phenomenon}</p>
      <p><strong>发现:</strong> ${entry.discovery}</p>
      <p><strong>宣言:</strong> ${entry.declaration}</p>
    `;
    diaryEntriesContainer.appendChild(entryDiv);
  });
}

loadMoreButton.addEventListener('click', function () {
  displayCount += 3;
  renderEntries();
});
