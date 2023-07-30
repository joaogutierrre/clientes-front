import {Component, OnInit} from '@angular/core';
import {Cliente} from '../cliente';
import {ClientesService} from '../../clientes.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-clientes-form',
    templateUrl: './clientes-form.component.html',
    styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
    cliente: Cliente;
    success = false;
    errors: string[];

    constructor(private clienteService: ClientesService, private router: Router) {
        this.cliente = new Cliente();
    }

    protected readonly onsubmit = onsubmit;

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.clienteService
            .salvar(this.cliente)
            .subscribe(response => {
                    console.log(response);
                    this.success = true;
                    this.errors = null;
                    this.cliente = response;
                }, errorResponse => {
                    console.log(errorResponse);
                    this.success = false;
                    this.errors = errorResponse.error.errors;
                }
            );
    }

    cancelar() {
        this.router.navigate(['clients-form']);
        console.log('Cancelou!');
    }
}
