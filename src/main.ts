import 'zone.js/dist/zone';
import { Component, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

enableProdMode();

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  template: `
  <ng-container *ngIf="true">
<p>
  <ng-home [id]="6" /> 
  <ng-home [id]="5" />
</p>
<p>
//incorect should be 6 5
</p>
  </ng-container>
  <p>
  <ng-home *ngIf="true" [id]="6" /> 
  <ng-home *ngIf="true" [id]="5" />
  </p>
  <p>
  correct 6 5 cause ngIf wrapping individually
  </p>
  <ng-container *ngIf="true">
  <p>
  <ng-home [id]="6" /> 
  <ng-home [id]="5" />
  <ng-home [id]="4" />
  </p>
  <p>
  here shoudl be 6 5 4 but completly broken cause 3x used in single view
  </p>
  </ng-container>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
