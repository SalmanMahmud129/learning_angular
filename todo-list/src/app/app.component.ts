import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  tasks: Task[]= [new Task("Visit Ann", false), new Task("Call Dad", false), new Task("Go to the gym", false), new Task("Wash the dishes", false), new Task("Shop for party", false),]

  add(task: string){
    this.tasks.push(new Task(task, false))
  }

  remove(existingTask: Task){
    this.tasks = this.tasks.filter(task => task != existingTask)
  }

  markAsDone(existingTask: Task){
    alert("The task: " + existingTask.title + " is done")
    existingTask.isDone = true
  }
}


class Task {
  constructor(public title: string, public isDone: boolean = false){

  }

  // public isDone = false
}
