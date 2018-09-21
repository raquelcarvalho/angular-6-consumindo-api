import { Component, OnInit } from '@angular/core';
import { Cep } from '../models/cep';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})

export class CepComponent implements OnInit {
  
  cep = new Cep()
  
  constructor(private cepService:CepService) { }
  
  ngOnInit() {
  }

  buscar() {
    this.cepService.buscarService(this.cep.cep)
    .then((cep:Cep) => this.cep = cep)
    .catch(() => {
      alert('Não fou possivel encontrar o cep!')
    })
  }

}
