import { RouterModule } from '@angular/router';
import { HighLightDirective } from '../directives/firstDirective';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, HighLightDirective], // Declare your component and directive here
  imports: [CommonModule, RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
