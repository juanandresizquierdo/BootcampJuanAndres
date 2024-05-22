export class Song {
  id: number;
  title: string;  // Asegúrate de que esta línea esté presente
  artist: string;
  genre: string;
  publicationDate: string;
  playCount: number;

  constructor(id: number, title: string, artist: string, genre: string, publicationDate: string, playCount: number) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.publicationDate = publicationDate;
    this.playCount = playCount;
  }
}
  
