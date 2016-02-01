var helper = require('./todoListHelper.js');

describe('TodoList', function() {
  var title, pageHeader, newTaskEntry, addTaskButton, tasks;

  beforeAll(function() {
    browser.get('http://localhost:5000');
    title = browser.getTitle();
    pageHeader = element(by.className('page-header')).getText();
    newTaskEntry = element(by.model('todoCtrl.newTask'));
    addTaskButton = element(by.buttonText('Add Task'));
    tasks = element.all(by.repeater('task in todoCtrl.filteredTasks'));
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
});
