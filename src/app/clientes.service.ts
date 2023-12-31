import {Injectable} from '@angular/core';
import {Cliente} from './clientes/cliente';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClientesService {

    constructor(private http: HttpClient) {
    }

    salvar(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
    }

    getCliente(): Cliente {
        const cliente: Cliente = new Cliente();
        cliente.nome = 'João';
        cliente.cpf = '888.888.888-88';
        return cliente;
    }

}
