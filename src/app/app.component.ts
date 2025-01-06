import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MeuPrimeiroComponent} from './meu-primeiro/meu-primeiro.component';
import {MeuSegundoComponent} from './meu-segundo/meu-segundo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MeuPrimeiroComponent, MeuSegundoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeiro-projeto-angular2';
}
