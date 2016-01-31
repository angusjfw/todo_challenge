describe('TodoListController', function() {
  beforeEach(module('TodoList'));

  var ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('intialises with an empty taks array and undefined newTask', function() {
    expect(ctrl.tasks).toBeUndefined();
    expect(ctrl.newTask).toBeUndefined();
  });
});
