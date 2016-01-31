todoList.controller('TodoListController', [function() {
  var self = this;

  self.tasks = [];

  self.addTask = function() {
    self.tasks.push({ name: self.newTask })
  }
}]);
