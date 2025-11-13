let queue = {};
let head = 0;
let tail = 0;

let task;
let displayTask = document.getElementById("tasks");


document.body.addEventListener("keydown", (e) => {
  if (e.key == "Enter")
  {
    task = document.getElementById("task-input").value;
    enqueue(task);
    document.getElementById("task-input").value = '';
    console.log(queue)
  }
})

function enqueue(newTask)
{
  queue[tail] = newTask;
  tail++;

  let input = document.createElement('input');
  input.type = "checkbox";
  input.name = task;
  input.id = task;
  input.className = "m-2 ml-0";

  let node = document.createElement('label');
  node.innerHTML = task;
  node.className = "text-2xl";

  node.prepend(input);
  displayTask.prepend(node);
}

function dequeue(newTask) 
{
  if (head == tail)
  {
    throw new Error("Queue is empty");
  }
  let t = queue[head];
  head++;
  return t;
}