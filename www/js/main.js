let app;

// Tell jsonflex what classes we expect it to save/load
JSON._classes(App, TodoList, DoneList, ListItem);

// Load json data
JSON._load('todo-list')
.then((data) => {
  // Retrieve the app from JSON
  app = data.app;
})
.catch(() => {
  // No working json data
  // create new app
  app = new App();
})
.then(() => {
  // Tell the app to render to <main>
  app.render('main');
});