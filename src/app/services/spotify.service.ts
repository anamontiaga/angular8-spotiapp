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
        "Bearer BQAZmsbARegJ54Rgb0uaeE5abM_QI90wO0fmrub6I-e2bIqpg0ay9ssARXDTDAlTbXwjZVmn5sjCb-AY4UY"
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
