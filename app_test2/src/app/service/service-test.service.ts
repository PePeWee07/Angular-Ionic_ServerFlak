import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  constructor(private http: HttpClient) { }

  getTest2(url: string) {
    // Define los encabezados que deseas incluir
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Agrega los encabezados a la solicitud
    return this.http.get(url);
  }

}
