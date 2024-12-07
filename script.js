document.addEventListener("DOMContentLoaded", () => {
  const diaryEntries = document.getElementById("diary-entries");
  const noEntriesMessage = document.getElementById("no-entries-message");
  const loadMoreButton = document.getElementById("load-more");

  // 初始化日记数据
  let entries = [];

  // 渲染日记记录
  const renderEntries = () => {
    diaryEntries.innerHTML = ""; // 清空日记记录

    if (entries.length === 0) {
      // 显示缺省文案
      noEntriesMessage.style.display = "block";
    } else {
      // 隐藏缺省文案
      noEntriesMessage.style.display = "none";

      // 渲染每条日记
      entries.forEach(entry => {
        const entryDiv = document.createElement("div");
        entryDiv.className = "diary-entry";
        entryDiv.innerHTML = `
          <p><strong>行为:</strong> ${entry.action}</p>
          <p><strong>现象:</strong> ${entry.phenomenon}</p>
          <p><strong>发现:</strong> ${entry.discovery}</p>
          <p><strong>宣言:</strong> ${entry.declaration}</p>
        `;
        diaryEntries.appendChild(entryDiv);
      });
    }

    // 加载更多按钮紧跟最后一条记录
    loadMoreButton.style.display = entries.length > 0 ? "block" : "none";
    diaryEntries.appendChild(loadMoreButton);
  };

  // 提交表单事件
  document.getElementById("diary-form").addEventListener("submit", (event) => {
    event.preventDefault();

    // 获取表单数据
    const action = document.getElementById("action").value.trim();
    const phenomenon = document.getElementById("phenomenon").value.trim();
    const discovery = document.getElementById("discovery").value.trim();
    const declaration = document.getElementById("declaration").value.trim();

    if (action && phenomenon && discovery && declaration) {
      // 构造新日记条目
      const newEntry = { action, phenomenon, discovery, declaration };

      // 将新日记添加到数组
      entries.push(newEntry);

      // 清空表单
      document.getElementById("diary-form").reset();

      // 更新页面
      renderEntries();
    } else {
      alert("请完整填写所有字段！");
    }
  });

  // 加载更多按钮事件
  loadMoreButton.addEventListener("click", () => {
    entries.push({
      action: "示例行为",
      phenomenon: "示例现象",
      discovery: "示例发现",
      declaration: "示例宣言"
    });
    renderEntries();
  });

  // 初始渲染
  renderEntries();
});
