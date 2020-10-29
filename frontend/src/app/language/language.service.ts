import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Language } from './language.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

    SERVER_URL = environment.SERVER_URL;

    constructor(private http: HttpClient) { }

    create(language: Language): Observable<HttpResponse<Language>> {
      return this.http.post(`${this.SERVER_URL}/languages`, language, {observe: 'response'});
    }

    getAll(): Observable<Language[]> {
      return this.http.get<Language[]>(`${this.SERVER_URL}/languages`, {observe: 'body'});
    }

}
