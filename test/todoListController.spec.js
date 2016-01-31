describe('todoListController', function() {
  beforeEach(module('todoList'));

  var ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  it('intialises with an empty taks array and undefined newTask', function() {
    expect(ctrl.tasks).toBeUndefined();
    expect(ctrl.newTask).toBeUndefined();
  });
});
