import {Component, OnInit} from '@angular/core';
import {Cliente} from '../cliente';
import {ClientesService} from '../../clientes.service';

@Component({
    selector: 'app-clientes-form',
    templateUrl: './clientes-form.component.html',
    styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
    cliente: Cliente;

    constructor(private clienteService: ClientesService) {
        this.cliente = new Cliente();
    }

    protected readonly onsubmit = onsubmit;

    ngOnInit(): void {
    }


    onSubmit(): void {
        this.clienteService
            .salvar(this.cliente)
            .subscribe();
    }
}
