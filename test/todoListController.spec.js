describe('TodoListController', function() {
  beforeEach(module('TodoList'));

  var ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('intialise empty task arrays, no filter, undefined newTask', function() {
    expect(ctrl.tasks).toEqual([]);
    expect(ctrl.filteredTasks).toEqual([]);
    expect(ctrl.currentFilter).toEqual('all');
    expect(ctrl.newTask).toBeUndefined();
  });

  describe('#addTask', function() {
    beforeEach( function() {
      spyOn(ctrl, 'applyFilter');
      ctrl.newTask = 'a new task';
      ctrl.addTask();
    });

    it('adds a new task object to tasks array', function() {
      expect(ctrl.tasks[0].name).toEqual('a new task');
      expect(ctrl.tasks[0].done).toEqual(false);
    });

    it('clears the newTask field', function() {
      expect(ctrl.newTask).toEqual('');
    });

    it('calls function to update filtered tasks', function() {
      expect(ctrl.applyFilter).toHaveBeenCalled();
    });
  });

  describe('#applyFilter', function() {
    it('selects tasks by filter and updates filteredTasks array', function() {
      ctrl.tasks = [
        { name: 'incomplete task', done: false },
        { name: 'complete task', done: true },
        { name: 'latest task', done: false }
      ]
      ctrl.applyFilter('active');
      expect(ctrl.filteredTasks.length).toEqual(2);
    });
  });
});
