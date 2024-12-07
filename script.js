document.addEventListener("DOMContentLoaded", () => {
  const diaryEntries = document.getElementById("diary-entries");
  const noEntriesMessage = document.getElementById("no-entries-message");
  const loadMoreButton = document.getElementById("load-more");

  // 模拟加载数据
  let entries = []; // 初始化为空

  const renderEntries = () => {
    diaryEntries.innerHTML = ""; // 清空现有内容

    if (entries.length === 0) {
      // 如果没有任何记录，显示缺省文案
      noEntriesMessage.style.display = "block";
    } else {
      // 如果有记录，隐藏缺省文案
      noEntriesMessage.style.display = "none";

      // 渲染日记条目
      entries.forEach(entry => {
        const entryDiv = document.createElement("div");
        entryDiv.className = "diary-entry";
        entryDiv.innerHTML = `<p>${entry}</p>`;
        diaryEntries.appendChild(entryDiv);
      });
    }

    // 加载更多按钮始终紧跟在列表末尾
    loadMoreButton.style.display = entries.length > 0 ? "block" : "none";
    diaryEntries.appendChild(loadMoreButton);
  };

  // 加载更多按钮事件
  loadMoreButton.addEventListener("click", () => {
    entries.push("这是新的日记内容...");
    renderEntries();
  });

  // 初始化
  renderEntries();
});
