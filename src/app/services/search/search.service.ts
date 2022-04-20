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
