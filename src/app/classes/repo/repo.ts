export class Repo {
  constructor(
    public name: string,
    public description: string,
    public full_name: string,
    public clone_url: string,
    public created_at: Date,
    public homepage: string,
    public language: string,
    public html_url: string,
    public updated_at: Date
  ) {}
}
