document.addEventListener("DOMContentLoaded", () => {
  const diaryEntries = document.getElementById("diary-entries");
  const noEntriesMessage = document.getElementById("no-entries-message");
  const loadMoreButton = document.getElementById("load-more");

  // 模拟加载数据
  let entries = []; // 初始为空

  const renderEntries = () => {
    diaryEntries.innerHTML = ""; // 清空列表

    if (entries.length === 0) {
      // 如果没有记录，显示缺省文案
      noEntriesMessage.style.display = "block";
    } else {
      // 如果有记录，隐藏缺省文案
      noEntriesMessage.style.display = "none";

      entries.forEach(entry => {
        const entryDiv = document.createElement("div");
        entryDiv.className = "diary-entry";
        entryDiv.textContent = entry;
        diaryEntries.appendChild(entryDiv);
      });
    }

    // 按钮始终紧跟最后一项
    loadMoreButton.style.display = entries.length > 0 ? "block" : "none";
    diaryEntries.appendChild(loadMoreButton);
  };

  // 点击加载更多按钮
  loadMoreButton.addEventListener("click", () => {
    entries.push(`这是新日记条目 ${entries.length + 1}`);
    renderEntries();
  });

  // 初始化页面
  renderEntries();
});
