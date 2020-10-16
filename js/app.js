document.addEventListener("DOMContentLoaded", function()
{

    const todoInput = document.querySelector('#todo-input');
    const todoForm = document.querySelector('.todo-form');
    const todoList = document.querySelector('.todo-list');
    /** count for id incrementation */
    let count = 0;

    todoForm.addEventListener('submit', (e) =>
    {
        e.preventDefault()
        /** take form input value */
        let todoValue = todoInput.value;
        /** create elements to ToDoItem */
        let p = createNode('p'),
            li = createNode('li');
        // Add value of form input in p element
        addValue(p, todoValue);
        // add class & attributes
        addClass(p, 'todo-text');
        addClass(li, 'todo-item');
        addAttr(p , 'draggable', 'true');
        addAttr(p , 'ondragstart', 'drag(event)');
        addAttr(p, "id", `drag${count}`)
        addAttr(li, 'ondrop', 'drop(event)');
        addAttr(li, 'ondragover', 'allowDrop(event)');
        addAttr(li, "id", `item${count}`)
        // increment count value
        count ++;
        // append child in parent element
        append(li, p);
        append(todoList, li);
    })
})

