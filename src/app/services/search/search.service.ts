import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getUser(username: string) {
    const userUrl = `${environment.apiUrl}${username}`;

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3.raw',
      Authorization: 'token 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',
    };

    return this.http.get(userUrl, { headers: headers });
  }

  getRepos(username: string) {
    const repoUrl = `${environment.apiUrl}${username}/repos`;

    console.log(repoUrl);

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3.raw',
      Authorization: 'token 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',
    };

    return this.http.get(repoUrl, { headers: headers });
  }
}
