import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisexitoPage } from '../regisexito/regisexito.page';
@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.page.html',
  styleUrls: ['./registrousuario.page.scss'],
})
export class RegistrousuarioPage implements OnInit {

  constructor(public modalCtrl: ModalController,) { }

  ngOnInit() {
  }
  async dismiss(){
    await this.modalCtrl.dismiss();

}
async regisexito(){
  const modal = await this.modalCtrl.create({
    component: RegisexitoPage,
    animated: true,
    mode:'ios',
    backdropDismiss: false,
    cssClass:'regisexito-modal',
  })


  return await modal.present();
}

}