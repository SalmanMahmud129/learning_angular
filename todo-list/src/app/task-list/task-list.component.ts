import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  constructor(){
    
  }


  tasks: Task[]= [new Task("Visit Ann", false), new Task("Call Dad", false), new Task("Go to the gym", false), new Task("Wash the dishes", false), new Task("Shop for party", false),]

  add(task: string){
    this.tasks.push(new Task(task, false))
  }

  remove(existingTask: Task){
    let confirmation = confirm("Are you sure you want to delete " + existingTask.title + "?" )

    if(confirmation){
      this.tasks = this.tasks.filter(task => task != existingTask)
    }
    
  }

  

}



class Task {
  constructor(public title: string, public isDone: boolean = false){

  }

  toggleIsDone(){
    this.isDone = !this.isDone
  }

  // public isDone = false
}



