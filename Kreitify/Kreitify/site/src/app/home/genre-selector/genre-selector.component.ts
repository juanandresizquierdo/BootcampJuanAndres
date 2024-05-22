import { Component } from '@angular/core';
import { GenreService } from '../../home/genre.service';

@Component({
  selector: 'app-genre-selector',
  template: `
    <select [(ngModel)]="selectedGenre" (change)="changeGenre(selectedGenre)">
    <option value="">Todos los estilos</option>
    <option value="Classical">Clásica</option>
    <option value="Hip-Hop">Hip-Hop</option>
    <option value="Pop">Pop</option>
    <option value="Rock">Rock</option>
    <option value="Jazz">Jazz</option>
    <option value="Blues">Blues</option>
    <option value="Rap">Rap</option>
    <option value="Reggaeton">Reggaeton</option>
    <option value="Salsa">Salsa</option>
    <option value="Samba">Samba</option>
    <option value="Bachata">Bachata</option>
    <option value="Cumbia">Cumbia</option>
    <option value="Merengue">Merengue</option>
    <option value="Punk">Punk</option>
    <option value="Rock">Rock</option>
      <!-- Añade más géneros según sea necesario -->
    </select>
  `
})
export class GenreSelectorComponent {
  selectedGenre: string = '';

  constructor(private genreService: GenreService) { }

  changeGenre(genre: string): void {
    this.genreService.changeGenre(genre);
  }
}