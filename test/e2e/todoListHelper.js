function getInputValue(input) {
  return input.getAttribute('value')
    .then(function(value) {
      return value;
    });
}

function getCheckBox(taskNumber) {
  return element.all(by.model('task.done')).get(taskNumber - 1);
}

function isComplete(taskNumber) {
  return getCheckBox(taskNumber).getAttribute('checked')
    .then(function(value) {
      return (value === 'true');
    });
}

function completeTask(taskNumber) {
  getCheckBox(taskNumber).click();
}

function getTextClass(taskNumber) {
  return element.all(by.tagName('span')).get(taskNumber - 1)
    .getAttribute('class')
    .then(function(value) {
      return value;
    });
}

function getTaskCount() {
  return element.all(by.repeater('task in todoCtrl.filteredTasks'))
    .then(function(elements) {
      return elements.length;
    });
}

module.exports = {
  getInputValue: getInputValue,
  isComplete: isComplete,
  completeTask: completeTask,
  getTextClass: getTextClass,
  getTaskCount: getTaskCount
}
