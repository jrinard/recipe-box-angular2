//ROOT COMPONENT
import { Component } from '@angular/core';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS // this is our VIEW
@Component({ // decorator defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>{{category}}</h3>
      <ul> <!-- repeater DIRECTIVE --> <!-- tasks is the array and it is assigning each iteration to currentRecipe temporarly -->
        <li [class]="priorityColor(currentRecipe)"
           (click)="isDone(currentRecipe)"
           *ngFor="let currentRecipe of recipeArray">{{currentRecipe.title}}, {{currentRecipe.ingredients}}, {{currentRecipe.directions}}
           <button class="btn btn-xs" (click)="editRecipe(currentRecipe)">Edit</button>
        </li><!-- assigning li tag to a loop/repeater -->
      </ul>
      <hr>
      <div *ngIf="selectedRecipe"> <!-- ngIF checks selectedRecipe's value of null. if it is not null due to clickedRecipe then it shows-->
        <h3>{{selectedRecipe.title}}</h3>
        <p>Recipe Complete? {{selectedRecipe.done}}</p>
        <h3>Edit Recipe</h3>
        <label>Enter Recipe Name:</label>
        <input class="form-control" [(ngModel)]="selectedRecipe.title"><!-- ngModel = event and property binding// assigning input to description // provides a shortcut for two-way data binding in forms-->
        <br>
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="1"> 1 (Low Priority)<br><!-- radio buttons require predefined values to select from. -->
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="2"> 2 (Medium Priority)<br>
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="3"> 3 (High Priority)<br>
        <button class="btn btn-xs" (click)="finishedEditing()">Close Edit</button><!-- When clicked changes selectedRecipe to null to hide -->
      </div>
  </div>
         `
})

//Part 2 COMPONENT CLASS DEFINITION -- determines how it BEHAVES
export class AppComponent {
  category: string = 'Dessert'; // Dynamic value
  //new task constructor to create our task object
  recipeArray: Recipe[] = [
    new Recipe('Cookies','Chocolate','Cook for 12 minutes', 1),
    new Recipe('Cake','Flour','Cook for 25 minutes', 2),
    new Recipe('Brownies','Sugar','Cook for 30 minutes', 3)
  ];
  selectedRecipe = null;

  // editRecipe statement must be defined in the component class
  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  isDone(clickedRecipe: Recipe) {
    if(clickedRecipe.done === true) {
      // alert("Done");
    } else {
      // alert("NOT Done");
    }
  }

  priorityColor(currentRecipe){
    if (currentRecipe.priority === 3){
      return "bg-danger";
    } else if (currentRecipe.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

}

//class declaration is our MODEL which holds our data // CONSTRUCTOR
export class Recipe {
  public done: boolean = false;
  constructor(public title: string, public ingredients: string, public directions: string, public priority: number) { }
}
