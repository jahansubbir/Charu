import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Root } from './models/root';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Accept-Encoding': 'deflate, br',
    'Accept-Language': 'en-US,en;q=0.9',
    'Connection': 'keep-alive',
    //'Cookie': _ga=GA1.3.2107178486.1653895539; cookieconsent_status=allow; __zlcmid=1AEkxm6WqYGTteT; _gid=GA1.3.372886471.1660204161; _gat_gtag_UA_109319589_1=1
    'Host': 'www.ldb.co.in',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin'

  })
};
@Injectable({
  providedIn: 'root'
})
export class LdbService {

  constructor(private httpClient:HttpClient) { }

  
  getSingleContainer(containerNo: string[]): Observable<Root> {
    var containerString=containerNo.join(",");
    var api = this.httpClient.
      get<Root>(`https://www.ldb.co.in/api/ldb/container/search?cntrNo=${containerString}&searchType=41`, httpOptions)
      
      
    return api;
  }
  
}
