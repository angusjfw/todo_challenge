describe('TodoListController', function() {
  beforeEach(module('TodoList'));

  var ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('intialises with an empty tasks array and undefined newTask', function() {
    expect(ctrl.tasks).toEqual([]);
    expect(ctrl.newTask).toBeUndefined();
  });

  describe('#addTask', function() {
    it('adds object to tasks array with name property', function() {
      ctrl.newTask = 'a new task';
      ctrl.addTask();
      expect(ctrl.tasks[0].name).toEqual('a new task');
    });
  });
});
