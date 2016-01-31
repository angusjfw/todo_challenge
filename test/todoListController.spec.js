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
    beforeEach( function() {
      ctrl.newTask = 'a new task';
      ctrl.addTask();
    });

    it('adds object to tasks array with name property', function() {
      expect(ctrl.tasks[0].name).toEqual('a new task');
    });

    it('clears the newTask field', function() {
      expect(ctrl.newTask).toEqual('');
    });
  });
});
