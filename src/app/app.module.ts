import { RouterModule } from '@angular/router';
import { HighLightDirective } from '../directives/firstDirective';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HighLightDirective], // Declare your component and directive here
  imports: [CommonModule, RouterModule],
  bootstrap: [],
})
export class AppModule {}
