import { ClienteService } from './services/cliente.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'finman';
  cadastroCliente: any[] = [];


  constructor(private clienteService : ClienteService) {

  }

  cadastrar($event : any) {
    console.log($event);

    this.cadastroCliente = $event;
  }
}
