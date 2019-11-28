import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html"
})
export class SearchComponent {
  artists: any[] = [];

  constructor(private spotify: SpotifyService) {}

  buscar(termino: string) {
    this.spotify.getArtist(termino).subscribe((data: any) => {
      this.artists = data;
    });
  }
}
