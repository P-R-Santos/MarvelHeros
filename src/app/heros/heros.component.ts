import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from './heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit{

  heroes = [];
  favoriteHeroes = [
    'hulk',
    'spider-man',
    'wolverine',
    'punisher',
    'storm'
  ];
  
  constructor(private router: Router, private herosService: HeroesService) {
    if(this.router.getCurrentNavigation().extras.state){
      this.heroes = this.router.getCurrentNavigation().extras.state.heroes;
    }
  }

  ngOnInit(){
    if(this.heroes.length == 0){
      for (let index = 0; index < this.favoriteHeroes.length; index++) {
        this.getHeroes(this.favoriteHeroes[index]);
      }
    }
  }

  /**
   * Busca os dados do heroi
   * @param name nome do heroi a ser consultado
   */
  getHeroes(name: string){
    this.herosService.getHeros(name).subscribe((res) => {
      var result: any = res;
        this.heroes.push(result.data.results[0]);
    })
  }

  /**
   * Direciona para uma nova página
   * @param url recebe string com a nova rota
   * @param hero recebe o heroi selecionado
   */
  goToPage(url: string, hero: any) {
    this.router.navigate([url], { state: { hero, heroes: this.heroes } });
  }

}
