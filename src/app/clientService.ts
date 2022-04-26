import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './shared/interfaces/posts';
import { ITheme } from './shared/interfaces/themes';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) { }

  loadThemes() {
    return this.http.get<ITheme[]>(`http://localhost:3000/api/themes`)
  }

  loadPosts(limit: number) {
    return this.http.get<IPost[]>(`http://localhost:3000/api/posts?limit=${limit}`)
  }
}