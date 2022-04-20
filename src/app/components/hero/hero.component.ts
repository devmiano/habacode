import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { User } from 'src/app/classes/user/user';
import { Repo } from 'src/app/classes/repo/repo';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  username!: string;
  user!: User;
  repos!: Repo[];
  recent!: string;

  public showInput = true; // Assign showInput boolean value true
  public showData = false; // Assign showData boolean value false
  hideInput!: boolean; // Declare hideinput as a boolean property

  get sortRepos() {
    return this.repos.sort((high, low) => {
      return <any>new Date(low.created_at) - <any>new Date(high.created_at);
    });
  }

  submitUser() {
    this.searchService.getUser(this.username).subscribe((data: any) => {
      this.user = new User(
        data.name,
        data.login,
        data.bio,
        data.avatar_url,
        data.html_url,
        data.public_repos,
        data.followers,
        data.following,
        (data.created_at = new Date(data.created_at)),
        (data.updated_at = new Date(data.updated_at)),
        data.location,
        data.email
      );
    });

    this.searchService.getRepos(this.username).subscribe((data: any) => {
      this.repos = data;
      this.repos.sort((high, low) => {
        return <any>new Date(low.created_at) - <any>new Date(high.created_at);
      });
      data.created_at = new Date(data.created);
    });

    this.showData = true;
  }

  showUserInput(hideInput: any) {
    this.showInput = hideInput;
    this.showData = false;
  }

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.getUser(this.username);
    this.searchService.getRepos(this.username);
  }
}
