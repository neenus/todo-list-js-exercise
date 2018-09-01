// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];

// Using class and constructor functoion to create a new task by adding to the arrays
// A new task will be created as incomplete
class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.complete = false;
    this.logState = function () {
      console.log(`${this.title} has${this.complete ? " ": " not "}been completed`);
    };
    this.markCompleted = function() {
      this.complete = true;
    };
  }
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   task.complete = true;
// }

// Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
  // const title = taskTitles[taskIndex];
  // const complete = taskComplete[taskIndex];
//   console.log(`${task.title} has ${task.complete ? " " : "not"} been completed`);
// }

// DRIVER CODE BELOW

let task1 = new Task("Clean Cat Litter", "Take all the 💩 out of the litter box");
let task2 = new Task("Do Laundry", "😨");
let task3 = new Task("Study", "Learn how to code");
let tasks = [task1, task2, task3];

task1.logState(); // Clean Cat Litter has not been completed
task2.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
task1.markCompleted();
task3.logState();
task3.markCompleted();

console.log(tasks);
