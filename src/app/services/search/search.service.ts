import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../classes/user/user';
import { Repo } from '../../classes/repo/repo';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  user!: User;
  repo!: Repo;
  constructor(private http: HttpClient) {
    this.user = new User('', '', '');
    this.repo = new Repo('', '', '');
  }

  getUser() {
    interface ApiResponse {
      bio: string;
      login: string;
      avatar_url: string;
      name: string;
      full_name: string;
      description: string;
    }

    const data = from(fetch(`${environment.apiUrl}`));

    const observable = new Observable((subscriber) => {
      subscriber.next(data);
    });

    console.log('Just before subscribe');
    observable.subscribe({
      next() {
        console.log(data);
      },
    });
  }
}

// this.http.get<ApiResponse>(environment.apiUrl).subscribe({
//       next: (response: any) => {this.user = new User(response.bio, response.login, response.avatar_url), this.repo => new Repo(response.name, response.full_name, response.description)}
//     })
