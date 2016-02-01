var helper = require('./todoListHelper.js');

describe('TodoList', function() {
  var title, pageHeader, newTaskEntry, addTaskButton, tasks;
  var allTasksButton, activeTasksButton, completedTasksButton;

  beforeAll(function() {
    browser.get('http://localhost:5000');
    title = browser.getTitle();
    pageHeader = element(by.className('page-header')).getText();
    newTaskEntry = element(by.model('todoCtrl.newTask'));
    addTaskButton = element(by.buttonText('Add Task'));
    tasks = element.all(by.repeater('task in todoCtrl.tasks'));
    allTasksButton = element(by.id('filter-all'));
    activeTasksButton = element(by.id('filter-active'));
    completedTasksButton = element(by.id('filter-completed'));
  });

  it('has a title tag and page header text', function() {
    expect(title).toEqual('To-Do List');
    expect(pageHeader).toEqual('to do:');
  });

  describe('adding tasks', function() {
    it('stores and displays new tasks entered by the user', function() {
      newTaskEntry.sendKeys('collect dry cleaning');
      addTaskButton.click();
      expect(tasks.first().getText()).toEqual('collect dry cleaning');
      expect(helper.getInputValue(newTaskEntry)).toEqual('');
    });
  });

  describe('marking completed tasks', function() {
    beforeEach(function() {
      newTaskEntry.sendKeys('collect dry cleaning');
      addTaskButton.click();
    });

    it('tasks unmarked by default', function() {
      expect(helper.isComplete(1)).toBeFalsy();
      expect(helper.getTextClass(1)).toEqual('done-false');
    });

    it('strikes through task when checkbox checked', function() {
      helper.completeTask(1);
      expect(helper.isComplete(1)).toBeTruthy();
      expect(helper.getTextClass(1)).toEqual('done-true');
    });
  });

  describe('filtering tasks', function() {
    beforeEach(function() {
      newTaskEntry.sendKeys('learn angular\n');
      newTaskEntry.sendKeys('go shopping\n');
      newTaskEntry.sendKeys('collect dry cleaning\n');
      helper.completeTask(1);
    });

    it('can show all tasks', function() {
      allTasksButton.click();
      expect(tasks.length).toEqual(3);
    });

    it('can filter for active tasks', function() {
      activeTasksButton.click();
      expect(tasks.length).toEqual(2);
      expect(tasks.first().name).toEqual('go shopping');
    });

    it('can filter for completed tasks', function() {
      completedTasksButton.click();
      expect(tasks.length).toEqual(1);
      expect(tasks.first().name).toEqual('learn angular');
    });
  });
});
