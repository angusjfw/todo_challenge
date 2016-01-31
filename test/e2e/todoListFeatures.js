describe('todoList', function() {
  beforeEach(function() {
    browser.get('http://localhost:5000');
  });

  it('has a title tag and page header text', function() {
    expect(browser.getTitle()).toEqual('To-Do List');
    expect(element(by.className('page-header')).getText()).toEqual('to do:');
  });

  it('stores and displays new tasks entered by the user', function() {
    element(by.model("newTask")).sendKeys("collect dry cleaning");
    element(by.id("addTask")).click();
    expect(element.all(by.binding("task")).first())
      .toEqual("collect dry cleaning");
  });
});
