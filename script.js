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
    event.preventDefault();

    const action = document.getElementById("action").value.trim();
    const phenomenon = document.getElementById("phenomenon").value.trim();
    const discovery = document.getElementById("discovery").value.trim();
    const declaration = document.getElementById("declaration").value.trim();

    if (action && phenomenon && discovery && declaration) {
      const today = new Date().toISOString().split("T")[0];
      const newEntry = { date: today, action, phenomenon, discovery, declaration };

      entries.unshift(newEntry); // 添加到数组开头
      document.getElementById("diary-form").reset(); // 清空表单
      renderEntries(); // 重新渲染
    } else {
      alert("请完整填写所有字段！");
    }
  });

  loadMoreButton.addEventListener("click", () => {
    entriesToShow += 1; // 每次点击加载一条记录
    renderEntries();
  });

  renderEntries();
});
