var helper = require('./todoListHelper.js');

describe('TodoList', function() {
  var newTaskEntry, tasks;
  var allTasksButton, activeTasksButton, completedTasksButton;

  beforeAll(function() {
    browser.get('http://localhost:5000');
    newTaskEntry = element(by.model('todoCtrl.newTask'));
    tasks = element.all(by.repeater('task in todoCtrl.tasks'));
    allTasksButton = element(by.id('filter-all')).element(by.xpath('..'));
    activeTasksButton = element(by.id('filter-active')).element(by.xpath('..'));
    completedTasksButton = element(by.id('filter-completed')).element(by.xpath('..'));
  });

  describe('filtering tasks', function() {
    beforeAll(function() {
      newTaskEntry.sendKeys('learn angular\n');
      newTaskEntry.sendKeys('go shopping\n');
      newTaskEntry.sendKeys('collect dry cleaning\n');
      helper.completeTask(1);
    });

    it('can show all tasks', function() {
      allTasksButton.click();
      expect(helper.getTaskCount()).toEqual(3);
    });

    it('can filter for active tasks', function() {
      activeTasksButton.click();
      expect(helper.getTaskCount()).toEqual(2);
      expect(tasks.first().getText()).toEqual('go shopping');
    });

    it('can filter for completed tasks', function() {
      completedTasksButton.click();
      expect(helper.getTaskCount()).toEqual(1);
      expect(tasks.first().getText()).toEqual('learn angular');
    });
  });
});
