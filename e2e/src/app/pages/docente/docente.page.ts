import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QRPage } from '../qr/qr.page';
import { RegistrousuarioPage } from '../registrousuario/registrousuario.page';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
  

  constructor( private menuController: MenuController,
    public modalCtrl: ModalController,
    
    ) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  async dismiss(){
    await this.modalCtrl.dismiss();


    
  }
  async docente(){
    const modal = await this.modalCtrl.create({
      component: DocentePage,
      animated: true,
      mode:'ios',
      backdropDismiss: false,
      cssClass:'docente-modal',
    })
  

    return await modal.present();
  }
  async qr(){
    const modal = await this.modalCtrl.create({
      component: QRPage,
      animated: true,
      mode:'ios',
      backdropDismiss: false,
      cssClass:'qr-modal',
    })
  

    return await modal.present();
  }
  async registrousuario(){
    const modal = await this.modalCtrl.create({
    component: RegistrousuarioPage,
    animated: true,
    mode:'ios',
    backdropDismiss: false,
    cssClass:'registrousuario-modal',
  })
  return await modal.present();

  }

}

