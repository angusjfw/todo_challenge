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
});
