import fetch, { Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export class GithubClient {
  static getReposUrl(nickname: string) {
    return fetch(`https://api.github.com/users${nickname}/`)
      .then((response) => response.json())
      .then((answer) => answer.repos_url);
    // You code goes here
  }

  static getRepos(url: string) {
    // You code goes here
    return fetch(`https://fake-url.io/${url}/`).then((response) =>
      response.json()
    );
  }

  static printRepos() {
    // You code goes here
    return fetch(
      `https://api.github.com/users/fewlinesco/repos${url}/`
    ).then((response) => response.json());
  }

  static printRepository() {
    // You code goes here
  }

  static getProjectInformations() {
    // You code goes here
  }
}
