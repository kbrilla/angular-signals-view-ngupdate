import 'zone.js/dist/zone';
import {
  ChangeDetectionStrategy,
  Component,
  enableProdMode,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent, HomezComponent } from './home.component';

enableProdMode();

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HomeComponent, HomezComponent],
  template: `
    <ng-container *ngIf="true">
    <ng-home  [id]="3" />
    <ng-homez  [id2]="3" />
    </ng-container>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
