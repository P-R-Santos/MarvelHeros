import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent{


  hero: any;
  heroes: any;

  constructor(private router: Router) {
    this.hero = this.router.getCurrentNavigation().extras.state.hero;
    this.heroes = this.router.getCurrentNavigation().extras.state.heroes;
   }

  /**
   * Direciona para uma nova página
   * @param url recebe string com a nova rota
   */
  goToPage(url: string) {
    this.router.navigate([url], { state: { heroes: this.heroes } });
  }

}
