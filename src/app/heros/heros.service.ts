import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';

import { publicKey, privateKey } from '../../../api-key'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url: string = 'https://gateway.marvel.com:443';
  
  constructor(private httpClient: HttpClient) { }

  /**
   * Cria o campo httpOption
   */
  createOption(){
    let httpOptions;
    let tsvar = new Date().getTime();
    let hashvar = Md5.hashStr(tsvar + privateKey() + publicKey());
    httpOptions = {
      params : {
        apikey: publicKey(),
        ts:  tsvar,
        hash: hashvar
      }
    }    
    return httpOptions
  }

  /**
   * Busca os dados dos herois com base em um texto
   * @param name texto que vai ser pesquisado na opcao name da api
   */
  getHeros(name: string){
    let httpOption = this.createOption();
    let urlGetHeros = this.url + '/v1/public/characters';
    httpOption.params.name = name;
    return this.httpClient.get(urlGetHeros,httpOption );
  }
}
