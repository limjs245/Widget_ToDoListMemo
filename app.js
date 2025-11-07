const input = document.getElementById('item-input');
const list = document.getElementById('todo-list');
const didList = document.getElementById('did-list');
const addBtn = document.getElementById('add-btn');

document.addEventListener('DOMContentLoaded', () => {
    let itemCount = 0;

    function saveData() {
        const data = [];

        list.querySelectorAll(".todo-item").forEach(li => {
            data.push({
                text: li.querySelector(".todo-item-text").innerText,
                status: "todo"
            });
        });

        didList.querySelectorAll(".todo-item").forEach(li => {
            data.push({
                text: li.querySelector(".todo-item-text").innerText,
                status: "done"
            });
        });

        localStorage.setItem("todoData", JSON.stringify(data));
    }

    function createItem(memo, status) {
        itemCount += 1;

        const li = document.createElement('li');
        li.innerHTML = `
        <div class="todo-item-container not-dragging">
            <p class="todo-item-text"></p>
            <div class="tool-box">
                <label class="check" for="did-${itemCount}">✓</label>
                <input type="checkbox" class="didCheckbox" id="did-${itemCount}">
                <button class="delete-btn">삭제</button>
            </div>
        </div>
        `
        li.classList.add('todo-item');
        li.draggable = true;

        const itemContainer = li.querySelector('.todo-item-container');
        const todoItemText = li.querySelector('.todo-item-text');
        const deleteBtn = li.querySelector('.delete-btn');
        const checkbox = li.querySelector('.didCheckbox');

        todoItemText.innerText = memo;

        li.addEventListener('dragstart', (e) => {
            li.classList.add('dragging');
            itemContainer.classList.remove('not-dragging');
            e.dataTransfer.effectAllowed = 'move';
        });

        li.addEventListener('dragend', () => {
            li.classList.remove('dragging');
            itemContainer.classList.add('not-dragging');
        });

        deleteBtn.addEventListener('click', () => {
            li.remove();
            saveData();
        });

        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                didList.appendChild(li);
                todoItemText.classList.add('cancellation-line');
            } else {
                list.appendChild(li);
                todoItemText.classList.remove('cancellation-line');
            }
            saveData();
        });

        todoItemText.addEventListener('click', () => {
            navigator.clipboard.writeText(todoItemText.innerText);
            const notification =  document.getElementById("notification");
            notification.innerText = "복사되었습니다";
            setTimeout(() => notification.innerText = "", 1000);
        });

        if (status === 'done') {
            checkbox.checked = true;
            todoItemText.classList.add('cancellation-line');
        }

        return li;
    }

    function loadData() {
        const rawData = localStorage.getItem('todoData');
        
        if (rawData) {
            const data = JSON.parse(rawData);
            
            data.forEach(item => {
                const li = createItem(item.text, item.status);

                if (item.status === 'todo') {
                    list.appendChild(li);
                } else {
                    didList.appendChild(li);
                }
            });
        }
    }

    function addItem() {
        memo = input.value;

        if (memo) {
            const li = createItem(memo, "todo");
            list.appendChild(li);
            input.value = "";
            saveData();
        }
    }

    list.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        
        const draggingItem = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(list, e.clientY);

        if (afterElement == null) {
            list.appendChild(draggingItem);
        } else {
            list.insertBefore(draggingItem, afterElement);
        }
    });

    addBtn.onclick = addItem;

    input.addEventListener('focus', () => {
        input.addEventListener('keydown', (e) => {
            if (e.key == 'Enter') {
                addItem();
            }
        });
    });

    loadData();
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.todo-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return {offset: offset, element: child}
        } else {
            return closest;
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element;
}