import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'state-project';

  counter = 0;

  soma = 0;

  setContador(event: string) {
    this.counter++;
    this.soma = Number(event)+this.counter;

    return this.soma;
  }
}
