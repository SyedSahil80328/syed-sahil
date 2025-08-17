// Fetch and display tasks
fetch('../assets/tasks.txt')
  .then(response => response.text())
  .then(text => {
    const tasks = text.split('\n'); // Split by line
    const list = document.getElementById('taskList');

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task;
      list.appendChild(li);
    });
  })
  .catch(err => console.error('Error loading file:', err));
