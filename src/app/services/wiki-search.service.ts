import {Injectable} from "@angular/core";
import {URLSearchParams, Jsonp} from "@angular/http";

@Injectable()
export class WikiSearchService {
  private jsonp: Jsonp;

  constructor(jsonp: Jsonp) {
    this.jsonp = jsonp;
  }

  public search(term: string) {
    const search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');

    return this.jsonp.get('https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
        .map(response => response.json()[1]);
  }
}
