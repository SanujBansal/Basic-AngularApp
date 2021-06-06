import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/models/Post'

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})

export class HelloComponent {
  posts: Post[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      this.posts = data as Post[];
      console.log(this.posts);
    });
  }

}
