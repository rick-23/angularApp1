import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<div myHighlight>
    <h1>This is my first Angular Project</h1>
  </div>`,
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'angularApp1';
}
