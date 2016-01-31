describe('TodoList', function() {
  var title, pageHeader, newTaskEntry, addTaskButton, tasks;

  beforeAll(function() {
    browser.get('http://localhost:5000');
    title = browser.getTitle();
    pageHeader = element(by.className('page-header')).getText();
    newTaskEntry = element(by.model('todoCtrl.newTask'));
    addTaskButton = element(by.buttonText('Add Task'));
    tasks = element.all(by.binding('task'));
  });

  it('has a title tag and page header text', function() {
    expect(title).toEqual('To-Do List');
    expect(pageHeader).toEqual('to do:');
  });

  it('stores and displays new tasks entered by the user', function() {
    newTaskEntry.sendKeys('collect dry cleaning');
    addTaskButton.click();
    expect(tasks.first().getText()).toEqual('collect dry cleaning');
  });
});
