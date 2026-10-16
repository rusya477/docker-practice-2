fetch('/api/items')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('items-list');
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.id}: ${item.name}`;
      list.appendChild(li);
    });
  })
  .catch(err => console.error(err));
