document.addEventListener("DOMContentLoaded", () => {
  const diaryEntries = document.getElementById("diary-entries");
  const noEntriesMessage = document.getElementById("no-entries-message");
  const loadMoreButton = document.getElementById("load-more");

  // 初始化数据
  let entries = [];

  // 渲染日记记录
  const renderEntries = () => {
    diaryEntries.innerHTML = ""; // 清空现有内容

    if (entries.length === 0) {
      // 显示缺省文案
      noEntriesMessage.style.display = "block";
    } else {
      // 隐藏缺省文案
      noEntriesMessage.style.display = "none";

      entries.forEach(entry => {
        const entryDiv = document.createElement("div");
        entryDiv.className = "diary-entry";
        entryDiv.textContent = entry;
        diaryEntries.appendChild(entryDiv);
      });
    }

    // 将“加载更多”按钮追加到末尾
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
      const newEntry = `
        行为: ${action}
        现象: ${phenomenon}
        发现: ${discovery}
        宣言: ${declaration}
      `;
      entries.push(newEntry);
      document.getElementById("diary-form").reset();
      renderEntries();
    } else {
      alert("请完整填写所有日记字段！");
    }
  });

  // 加载更多按钮事件
  loadMoreButton.addEventListener("click", () => {
    entries.push("这是加载的新日记内容...");
    renderEntries();
  });

  // 初始渲染
  renderEntries();
});
