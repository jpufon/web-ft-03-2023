
    let taskSubmit = document.querySelector('.form-control');
    let submitBtn = document.querySelector('#button-addon2');
    let editBtn = document.querySelector('.fa-pencil-alt');
    let deleteBtn = document.querySelectorAll('.fa-trash');

    let submitForm = document.querySelector('.submit-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        console.log('Form submitted!');
        console.log('Description:', taskSubmit.value);
        // make fetch call w/ payload
        let newTodo = {
            description: taskSubmit.value
        };
    console.log(newTodo);
        // reconfigure fetch  to accept post req & a payload
        let results = await fetch('/todos', {
            method: 'POST',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(newTodo)
        });

        let todoItems = await results.json();

        console.log(todoItems);

        updateFeedback(todoItems);
    });

    const updateFeedback = (todoArr) => {
        console.log(todoArr);
        let htmlBlock = '';

        todoArr.forEach((item) => {
            htmlBlock += `
                <li id="${item.id}">
                    <div class="row pr-3">
                        <div class="col-10 todo-text">
                            ${item.description}
                        </div>

                        <div class="col-2 text-right pr-2">
                            <button class="button btn edit-todo" data-id="${item.id}">
                                <span>
                                    <i class="fas fa-pencil-alt"></i>
                                </span>
                            </button>

                            <button class="button btn delete-todo" data-id="${item.id}">
                                <span>
                                    <i class="fas fa-trash"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </li>`;
        });

        let ul = document.querySelector('ul');
        ul.innerHTML += htmlBlock;
        addDeleteEventListeners();
    };

   

      
    
    deleteBtn.forEach((button) => {
        button.addEventListener('click', async (event) => {
          const todoId = event.target.closest('li').id;
          try {
            const response = await fetch(`/todos/${todoId}`, {
              method: 'DELETE'
            });
            if (response.ok) {
              // Remove the todo item from the UI
              const todoItem = event.target.closest('li');
              todoItem.remove();
              console.log('Todo item deleted:', todoId);
            } else {
              const errorData = await response.json();
              console.error('Failed to delete todo item:', errorData.error);
            }
          } catch (error) {
            console.error('Error deleting todo item:', error);
          }
        });
      });


// Call the function to add the initial delete button event listeners
addDeleteEventListeners();