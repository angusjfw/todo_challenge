exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['addingTasksSpec.js', 'markingTasksSpec.js', 'filteringTasksSpec.js'],
  capabilities: {
    browserName: 'chrome'
  }
}
