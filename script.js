document.addEventListener("DOMContentLoaded", () => {
  const diaryEntries = document.getElementById("diary-entries");
  const noEntriesMessage = document.getElementById("no-entries-message");
  const loadMoreButton = document.getElementById("load-more");

  let entries = [];

  const renderEntries = () => {
    diaryEntries.innerHTML = ""; // 清空日记记录

    if (entries.length === 0) {
      noEntriesMessage.style.display = "block"; // 显示缺省文案
    } else {
      noEntriesMessage.style.display = "none"; // 隐藏缺省文案

      entries.forEach(entry => {
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
    }

    loadMoreButton.style.display = entries.length > 0 ? "block" : "none";
    diaryEntries.appendChild(loadMoreButton);
  };

  document.getElementById("diary-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const action = document.getElementById("action").value.trim();
    const phenomenon = document.getElementById("phenomenon").value.trim();
    const discovery = document.getElementById("discovery").value.trim();
    const declaration = document.getElementById("declaration").value.trim();

    if (action && phenomenon && discovery && declaration) {
      const today = new Date().toISOString().split("T")[0]; // 添加日期

      const newEntry = { date: today, action, phenomenon, discovery, declaration };

      entries.push(newEntry);

      document.getElementById("diary-form").reset();
      renderEntries();
    } else {
      alert("请完整填写所有字段！");
    }
  });

  loadMoreButton.addEventListener("click", () => {
    entries.push({
      date: new Date().toISOString().split("T")[0],
      action: "示例行为",
      phenomenon: "示例现象",
      discovery: "示例发现",
      declaration: "示例宣言"
    });
    renderEntries();
  });

  renderEntries();
});
