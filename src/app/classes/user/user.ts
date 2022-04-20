export class User {
  constructor(
    public name: string,
    public login: string,
    public bio: string,
    public avatar_url: string,
    public html_url: string,
    public public_repos: number,
    public followers: number,
    public following: number,
    public created_at: Date,
    public updated_at: Date,
    public location: string,
    public email: string
  ) {}
}
