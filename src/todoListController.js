todoList.controller('TodoListController', [function() {
  var self = this;

  self.tasks = [];
  self.filteredTasks = [];
  self.currentFilter = 'all';

  self.addTask = function() {
    self.tasks.push({
      name: self.newTask,
      done: false
    })
    self.newTask = '';
    self.applyFilter(self.currentFilter);
  }

  self.applyFilter = function(filterType) {
    console.log(self.filteredTasks);
    self.currentFilter = filterType;
    self.filteredTasks = self.tasks.filter(function(task) {
      console.log(self.currentFilter, task.done);
      if (self.currentFilter === 'active') { return (!task.done); }
      if (self.currentFilter === 'complete') { return (task.done); }
      return task;
    });
    console.log(self.filteredTasks);
  }
}]);
