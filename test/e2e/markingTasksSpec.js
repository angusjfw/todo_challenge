var helper = require('./todoListHelper.js');

describe('TodoList', function() {
  var newTaskEntry;

  beforeAll(function() {
    browser.get('http://localhost:5000');
    newTaskEntry = element(by.model('todoCtrl.newTask'));
  });

  describe('marking completed tasks', function() {
    beforeEach(function() {
      newTaskEntry.sendKeys('collect dry cleaning\n');
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
