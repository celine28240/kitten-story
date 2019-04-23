import { Component, OnInit } from '@angular/core';
import {Kitten, KITTENS} from '../kitten';
import {UserList} from '../kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {


  public list:Kitten[];
  
                                      //ajoute le chat du formulaire à la liste globale
  kitten = KITTENS;
  selectedKitten:Kitten;
  
  constructor() { 
    this.list=KITTENS;
  }
                                      // ajoute le chat à la liste utilisateur et le supprime de la liste globale
  onSelect(kitten:Kitten): void{
    this.selectedKitten=kitten;
    KITTENS.splice(KITTENS.indexOf(kitten),1);
    UserList.push(this.selectedKitten);
  }
  ngOnInit() {
  }

}
