import { Component } from '@angular/core';
import { from } from 'rxjs';

import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  otherHero = [];
  searchText: string = '';
  showMessage: boolean = false;

  constructor(private appService: AppService){}

  ngOnInit(){
  }

  /**
   * Busca os dados do heroi desejado
   * @param name nome do heroi a ser buscado
   */
  getHeroes(name: string){
    this.appService.getHeros(name).subscribe((res) => {
      var result: any = res;
      let listheroes = [];
      for (let index = 0; index < result.data.results.length; index++) {
        listheroes.push(result.data.results[index]);
      }
      this.otherHero = listheroes;
      this.showMessage = this.otherHero.length == 0;
    })
  }
}
