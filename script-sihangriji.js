const diaryContent = document.getElementById('diaryContent');
const placeholder = document.getElementById('placeholder');
const diaryForm = document.getElementById('diaryForm');

// 假数据（实际使用中替换为后端数据）
const diaryData = [];

// 渲染日记记录
function renderDiaryRecords() {
    diaryContent.innerHTML = '';
    if (diaryData.length === 0) {
        placeholder.classList.add('visible');
    } else {
        placeholder.classList.remove('visible');
        diaryData.forEach((entry) => {
            const diaryRecord = document.createElement('div');
            diaryRecord.className = 'diary-record';
            diaryRecord.innerHTML = `
                <div class="diary-date">${entry.date}</div>
                <div class="diary-item"><b>行为：</b>${entry.action}</div>
                <div class="diary-item"><b>现象：</b>${entry.phenomenon}</div>
                <div class="diary-item"><b>发现：</b>${entry.discovery}</div>
                <div class="diary-item"><b>宣言：</b>${entry.declaration}</div>
            `;
            diaryContent.appendChild(diaryRecord);
        });
    }
}

// 提交表单
diaryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const action = document.getElementById('action').value.trim();
    const phenomenon = document.getElementById('phenomenon').value.trim();
    const discovery = document.getElementById('discovery').value.trim();
    const declaration = document.getElementById('declaration').value.trim();

    if (action && phenomenon && discovery && declaration) {
        const date = new Date().toISOString().replace('T', ' ').slice(0, 19);
        diaryData.push({ date, action, phenomenon, discovery, declaration });
        renderDiaryRecords();
        diaryForm.reset();
    } else {
        alert('请填写所有字段！');
    }
});

// 初始化渲染
renderDiaryRecords();
