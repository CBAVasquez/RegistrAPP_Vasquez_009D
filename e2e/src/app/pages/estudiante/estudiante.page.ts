import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CamaraPage } from '../camara/camara.page';
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

  constructor(  public modalCtrl: ModalController,) { }

  ngOnInit() {
  }
  async dismiss(){
    await this.modalCtrl.dismiss();

}
async camara(){
  const modal = await this.modalCtrl.create({
    component: CamaraPage,
    animated: true,
    mode:'ios',
    backdropDismiss: false,
    cssClass:'camara-modal',
  })


  return await modal.present();
}
}
