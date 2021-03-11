import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Produto } from "./produto";
import { Observable } from "rxjs";

@Injectable()
export class ProdutosService {

    protected UrlAPI : string = "http://localhost:3000/";

    constructor(private http: HttpClient) {}

    obterProdutos(): Observable<Produto[]>{
        return this.http.get<Produto[]>(this.UrlAPI + "produtos")
    }
}