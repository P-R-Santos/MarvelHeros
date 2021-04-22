import { Component } from '@angular/core';
import { from } from 'rxjs';

import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MarvelHeros';
  heroes = [];
  favoriteHeroes = [
    'hulk',
    'spider-man',
    'wolverine',
    'punisher',
    'storm'
  ];
  otherHero = [];
  searchText: string = '';
  showMessage: boolean = false;

  constructor(private appService: AppService){}

  ngOnInit(){
    for (let index = 0; index < this.favoriteHeroes.length; index++) {
      this.getHeroes(this.favoriteHeroes[index], false);
    }
  }

  getHeroes(name: string, all: boolean){
    this.appService.getHeros(name).subscribe((res) => {
      var result: any = res;
      console.log(result);
      if(all){
        let listheroes = [];
        for (let index = 0; index < result.data.results.length; index++) {
          listheroes.push(result.data.results[index]);
        }
        this.otherHero = listheroes;
        this.showMessage = this.otherHero.length == 0;
      }
      else{
        this.heroes.push(result.data.results[0]);
      }
    })
  }
}
