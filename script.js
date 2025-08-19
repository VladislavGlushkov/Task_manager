window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector(".tasks");


    form.addEventListener("submit", (e) => {
        e.preventDefault()

        let task = input.value;
        task = task.trim()

        if (!task) {
            alert("Please add task")
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("tasks-div");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_el.append(task_content_el);

        const task_cbox = document.createElement("input");
        task_cbox.classList.add("cbox");
        task_cbox.type = "checkbox";
        task_content_el.append(task_cbox);

        task_cbox.addEventListener("click", () => {
            if (task_cbox.checked) {
                task_cbox.nextElementSibling.classList.add("italic")
                task_cbox.nextElementSibling.classList.remove("normal")
            } else {
                task_cbox.nextElementSibling.classList.remove("italic")
                task_cbox.nextElementSibling.classList.add("normal")
            }
        });

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.append(task_input_el);

        const task_actions_element = document.createElement("div");
        task_actions_element.classList.add("actions");

        const task_edit_element = document.createElement("button")
        task_edit_element.classList.add("edit");
        task_edit_element.innerHTML = "Edit"

        const task_delete_element = document.createElement("button")
        task_delete_element.classList.add("delete")

        task_delete_element.addEventListener("click",()=>{
            task_delete_element.parentElement.parentElement.remove()
        })

        const icon = document.createElement("i")
        icon.classList.add("fa-solid")
        icon.classList.add("fa-trash")
        task_delete_element.append(icon)

        task_actions_element.append(task_edit_element)
        task_actions_element.append(task_delete_element)
        task_el.append(task_actions_element)
        list_el.append(task_el)

        input.value=""
        task_edit_element.addEventListener("click",()=>{
            if (task_edit_element.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly")
                task_input_el.focus();
                task_edit_element.innerText= "Save"
            } else{
                task_input_el.setAttribute("readonly","readonly")
                task_edit_element.innerText= "Edit"
            }
        })
    })
})