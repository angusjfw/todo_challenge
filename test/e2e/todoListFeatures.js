var helper = require('./todoListHelper.js');

describe('TodoList', function() {
  var title, pageHeader, newTaskEntry, addTaskButton, tasks;

  beforeAll(function() {
    browser.get('http://localhost:5000');
    title = browser.getTitle();
    pageHeader = element(by.className('page-header')).getText();
    newTaskEntry = element(by.model('todoCtrl.newTask'));
    addTaskButton = element(by.buttonText('Add Task'));
    tasks = element.all(by.repeater('task in todoCtrl.tasks'));
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
});
