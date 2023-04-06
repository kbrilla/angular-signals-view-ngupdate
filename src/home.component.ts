import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  signal,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ng-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    {{query().id}}
  `,
})
export class HomeComponent implements OnChanges {
  query = signal({ id: 1 });
  @Input() id: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.id) {
      console.log(changes.id);
      this.query.set({
        id: changes.id.currentValue,
      });
    }
  }
}
