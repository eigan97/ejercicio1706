import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class RequestServiceService {

  constructor(private request:HttpClient) {   }

  allCharacter(){
    return this.request.get('https://rickandmortyapi.com/api/character/');
  }

}