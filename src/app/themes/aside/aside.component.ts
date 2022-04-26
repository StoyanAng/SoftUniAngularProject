import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../clientService';
import { IPost } from '../../shared/interfaces/posts';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  posts: IPost[] = [];

  constructor(private clientServic: ClientService) { }

  ngOnInit(): void {
    this.clientServic.loadPosts(5).subscribe(result => {
      this.posts = result
      console.log(this.posts)
    })
  }

}
