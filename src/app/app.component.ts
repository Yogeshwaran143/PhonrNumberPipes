import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  code: number | undefined;
  number: number | undefined;

  displayFormat = false;

  showFormatting() {
    this.displayFormat = true;
  }
}
