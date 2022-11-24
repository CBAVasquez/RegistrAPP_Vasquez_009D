import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  componentes : Componente[] = [
    {
      icon: 'wifi-outline',
      name: 'Iniciar sesion',
      redirecTo:'/login'
    },

    {
      icon: 'bug-outline',
      name: 'Registrar Usuario',
      redirecTo:'/registrousuario'
    },
    {
      icon:'alarm-outline',
      name: 'QR',
      redirecTo:'/qr'
    },

  ];
}
