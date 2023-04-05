import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  signal,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'ng-home',
  standalone: true,
  imports: [CommonModule],
  template: `
  <pre>
    {{query() | json}}
  </pre>
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

@Component({
  selector: 'ng-homez',
  standalone: true,
  imports: [CommonModule],
  template: `
  <pre>
    {{querys() | json}}
    {{querys2() | json}}

  </pre>
  `,
})
export class HomezComponent implements OnChanges {
  querys = signal({ id: 1 });
  querys2 = signal({ id: 1 });

  @Input() id2: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.id2) {
      console.log(changes.id2);
      this.querys.set({
        id: changes.id2.currentValue,
      });
      this.querys2.set({
        id: changes.id2.currentValue,
      });
    }
  }
}
