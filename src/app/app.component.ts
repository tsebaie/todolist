import { Component } from '@angular/core';
import { literal } from '@angular/compiler/src/output/output_ast';
import { Tasks } from '../app/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //setting up our arrays
  listArray = new Array;//our object array
  listTask: string;
  listTime: string;

  constructor(){
    
  }

  //these methods take data from our html component and
  //assigns them to our variable above
  assignTask(event){
    this.listTask = event.target.value;
    event.target.value;
  }

  assignTime(event){
   this.listTime = event.target.value;
    event.target.value;
  }

  //now we take the information we recieved from our inputs
  //and create an instance of Task class and will take take
  //task and as parameters then assign them to our object 
  insertListItems(){
    let taskInstance = new Tasks(this.listTask, this.listTime);//new instance being created upon each call, this is our object

    if(taskInstance.task != '' && taskInstance.task != null && taskInstance.time != '' && taskInstance.time != null){//we create our condition to check for emty information
      
      /*if true: 
      we are taking the taskinstance which is our object of our task class and adding it to our array
      which is this list array below*/
      this.listArray.push(taskInstance);
    
    }//if false it will do nothing
  }

  deleteElement(i){//we are taking our index as an input parameter which is =  i

    //we then use the array method splice wich works like this: splice(startingPosition, howManyElementsToDelete)
    //in this case we want our index position and we are just deleting one element
    this.listArray.splice(i, 1);
  }

  /*for this scenario we are doing something similar to  our delete method  of which we want our array index position
  */
  updateElement(i){
    
    if(this.listTask != null && this.listTask != ''){
      let taskinstans = new Tasks(this.listTask, this.listTime);
      this.listArray[i] = taskinstans;
    }

    if(this.listTime != null && this.listTime != ''){
      let taskinstans = new Tasks(this.listTask, this.listTime);
      this.listArray[i] = taskinstans;
    }

  }
}
