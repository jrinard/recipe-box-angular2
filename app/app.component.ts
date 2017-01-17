//ROOT COMPONENT
import { Component } from '@angular/core';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS // this is our VIEW
@Component({ // decorator defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>{{category}}</h3>
     <ul> <!-- repeater DIRECTIVE --> <!-- tasks is the array and it is assigning each iteration to currentTask temporarly -->
       <li *ngFor="let currentRecipe of recipeArray">{{currentRecipe.title}}, {{currentRecipe.ingredients}}, {{currentRecipe.directions}}</li><!-- assigning li tag to a loop/repeater -->
     </ul>
  </div>
  `
})

//Part 2 COMPONENT CLASS DEFINITION -- determines how it BEHAVES
export class AppComponent {
  category: string = 'Dessert'; // Dynamic value
  //new task constructor to create our task object
  recipeArray: Recipe[] = [
    new Recipe('Cookies','Chocolate','Cook for 12 minutes'),
    new Recipe('Cake','Flour','Cook for 25 minutes'),
    new Recipe('Brownies','Sugar','Cook for 30 minutes')
  ];
}

//class declaration is our MODEL which holds our data // CONSTRUCTOR
export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
