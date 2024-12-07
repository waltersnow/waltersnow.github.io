document.addEventListener("DOMContentLoaded", () => {
  const diaryEntries = document.getElementById("diary-entries");
  const noEntriesMessage = document.getElementById("no-entries-message");
  const loadMoreButton = document.getElementById("load-more");

  // 模拟加载数据
  let entries = [];

  const renderEntries = () => {
    diaryEntries.innerHTML = ""; // 清空现有内容

    if (entries.length === 0) {
      noEntriesMessage.style.display = "block";
      loadMoreButton.style.display = "none";
    } else {
      noEntriesMessage.style.display = "none";

      entries.forEach(entry => {
        const entryDiv = document.createElement("div");
        entryDiv.className = "diary-entry";
        entryDiv.innerHTML = `<p>${entry}</p>`;
        diaryEntries.appendChild(entryDiv);
      });

      loadMoreButton.style.display = "block";
    }
  };

  // 加载更多按钮事件
  loadMoreButton.addEventListener("click", () => {
    entries.push("这是新的日记内容...");
    renderEntries();
  });

  // 初始化
  renderEntries();
});
