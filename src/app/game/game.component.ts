import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  template: `
    <section>
      <p>En segundo componente, Los juegos que se tienen son:</p>
      <ul>
        @for (game of games; track game.id) {
        <li>{{ game.name }}</li>
        }
      </ul>
    </section>
  `,
  styles: ``,
})
export class GameComponent {
  games = [
    {
      id: 1,
      name: 'Game 1',
    },
    {
      id: 2,
      name: 'Game 2',
    },
    {
      id: 3,
      name: 'Game 3',
    },
  ];
}
