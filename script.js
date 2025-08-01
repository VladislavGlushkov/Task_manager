window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task_input");
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
        task_cbox.type= "checkbox";
        task_content_el.append(task_cbox);

        
    })
})