import { Component, OnInit } from '@angular/core';
import { Marvel } from '../models/marvel';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

  marvel = new Marvel()

  constructor(private marvelService:MarvelService) { }

  ngOnInit() {
    this.marvelService.renderService()
    .then((marvel:Marvel) => {
      this.marvel = marvel
      console.log('mar', this.marvel)
    })
    .catch(() => {
      alert('Não fou possivel encontrar o marvel!')
    })
  }

}
