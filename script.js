document.addEventListener("DOMContentLoaded", () => {
  const diaryEntries = document.getElementById("diary-entries");
  const noEntriesMessage = document.getElementById("no-entries-message");
  const loadMoreButton = document.getElementById("load-more");

  let entries = [];
  let entriesToShow = 3; // 控制初始加载的日记数

  const renderEntries = () => {
    diaryEntries.innerHTML = ""; // 清空日记记录

    if (entries.length === 0) {
      noEntriesMessage.style.display = "block"; // 显示缺省文案
    } else {
      noEntriesMessage.style.display = "none"; // 隐藏缺省文案

      // 显示当前要展示的日记条数
      const entriesToRender = entries.slice(0, entriesToShow);

      entriesToRender.forEach(entry => {
        const entryDiv = document.createElement("div");
        entryDiv.className = "diary-entry";
        entryDiv.innerHTML = `
          <p class="entry-date">${entry.date}</p>
          <p><strong>行为:</strong> ${entry.action}</p>
          <p><strong>现象:</strong> ${entry.phenomenon}</p>
          <p><strong>发现:</strong> ${entry.discovery}</p>
          <p><strong>宣言:</strong> ${entry.declaration}</p>
        `;
        diaryEntries.appendChild(entryDiv);
      });

      // 控制加载更多按钮的显示逻辑
      loadMoreButton.style.display = entries.length > entriesToShow ? "block" : "none";
    }
  };

  document.getElementById("diary-form").addEventListener("submit", (event) => {
