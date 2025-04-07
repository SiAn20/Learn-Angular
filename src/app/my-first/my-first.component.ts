import { Component } from '@angular/core';
import { GameComponent } from "../game/game.component";

@Component({
  selector: 'app-my-first',
  imports: [GameComponent],
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.css',
})
export class MyFirstComponent {
  user = 'SiAnDev';
  inLogin = true;
}
