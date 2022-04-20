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
