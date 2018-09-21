import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { resolve } from 'url';
import { Cep } from './models/cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http:Http) { }

  buscarService(cep:string){
    return new Promise((resolve, reject) => {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
      .subscribe((result: any) => {
        resolve(this.recuperarDados(result.json()))
      },
      (error) => {
        reject(error.json())
      })
    })
  }

  recuperarDados(cepResult):Cep {
    let cep = new Cep();
    
    cep.cep = cepResult.cep;
    cep.logradouro = cepResult.logradouro;
    cep.complemento = cepResult.complemento;
    cep.bairro = cepResult.bairro;
    cep.localidade = cepResult.localidade;
    cep.uf = cepResult.uf;

    return cep;
  }
}
