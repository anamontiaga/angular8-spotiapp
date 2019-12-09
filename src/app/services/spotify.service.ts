import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQCaP72K22DHHeQTQLxeCp2K-8RZOi857s5_R0JnUIGK9ldv0o4BxUaG3zg6Wznkt4wFTi5LzMizoDXFLTY"
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases").pipe(
      map(data => {
        return data["albums"].items;
      })
    );
  }

  getArtist(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&offset=0&limit=15`
    ).pipe(
      map(data => {
        return data["artists"].items;
      })
    );
  }
}
