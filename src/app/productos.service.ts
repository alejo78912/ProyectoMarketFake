import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:8080/api/inventarios'; // ajusta esta URL según tu backend

  constructor(private http: HttpClient) { }

  productos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
