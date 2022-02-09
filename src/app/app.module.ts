import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppChildInputComponent } from './input-child.component';
import { AppOutParentComponent } from './output-parent.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, AppChildInputComponent, AppOutParentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
