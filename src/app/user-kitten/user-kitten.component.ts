import { Component, OnInit, Input } from '@angular/core';
import {Kitten} from '../kitten';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {

  @Input()kitten: Kitten;   //insertion du chat et de tous ses param dans la liste utilisateur
  constructor() { }

  ngOnInit() {
  }

  
}
