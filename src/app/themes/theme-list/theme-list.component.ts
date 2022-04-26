import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../clientService';
import { ITheme } from '../../shared/interfaces/themes';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit{

  isSubscribed: boolean = false;

  themes: ITheme[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.loadThemes().subscribe(result => {
      this.themes = result
      console.log(this.themes)
    })
  }

  manageSubsription(): void{
    if(!this.isSubscribed) {
      this.isSubscribed = true;
      console.log(`sub`);
    }
    else {
      this.isSubscribed = false;
      console.log(`unsub`);
    }
  }
}
