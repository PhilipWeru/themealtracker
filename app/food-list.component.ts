import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from '.edit-food-details.component';
import { NewFoodDetailsComponent } from './new-food.component';
import { HealthPipe } from '.health.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [HealthPipe],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  template:`
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All Food Items</option>
    `
})
