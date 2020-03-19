import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubapiSingleUserResult } from './githubapi-users-result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {
  private url: String = "api.github.com";
  private client: HttpClient;

  constructor(_client: HttpClient) {
    this.client = _client;
  }

  getAvatarUrl(userName: String): Observable<GithubapiSingleUserResult> {
    const userUrl = `https://${this.url}/users/${userName}`;
    return this.client.get<GithubapiSingleUserResult>(userUrl);
  }
}
