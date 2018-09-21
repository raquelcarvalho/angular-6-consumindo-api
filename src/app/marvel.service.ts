import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Md5 } from 'ts-md5/dist/md5'
import { Marvel } from './models/marvel';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  
  constructor(private http:Http) { }

  renderService(){
    const PUBLIC_KEY = '3de33d4f3cf669482f9978dbdb389c8c'
    const PRIVATE_KEY = '93956c84894dc7c1c8293e2fad540aa44d343272'
    const timestamp = Number(new Date())
    let md5 = new Md5()
    let hash = md5.appendStr(timestamp + PRIVATE_KEY + PUBLIC_KEY).end()
    
    return new Promise((resolve, reject) => {
      console.log('oi', hash);
      this.http.get(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash}`)
      .subscribe((result: any) => {
        resolve(this.saveData(result.json().data.results))
      },
      (error) => {
        reject(error.json())
      })
    })
  }

  saveData(dataResult):Marvel {
    let data = new Marvel()
    data.data = dataResult
    return data
  }
}

