// Fetch and display tasks

let i=1;
function readFile() {
    i++;
    fetch(`../assets/tasks-${i%2}.txt`)
    .then(response => response.text())
    .then(text => {
      const tasks = text.split('\n'); // Split by line
      const list = document.getElementById('taskList');
      list.innerHTML = null;

      tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        list.appendChild(li);
      });
    })
    .catch(err => console.error('Error loading file:', err));
}

setInterval(readFile, 5000);
