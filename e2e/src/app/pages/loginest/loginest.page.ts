import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RescontraPage } from '../rescontra/rescontra.page';
import { EstudiantePage } from '../estudiante/estudiante.page';

@Component({
  selector: 'app-loginest',
  templateUrl: './loginest.page.html',
  styleUrls: ['./loginest.page.scss'],
})
export class LoginestPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }
  async dismiss(){
    await this.modalCtrl.dismiss();
  }

  async rescontra(){
    const modal = await this.modalCtrl.create({
      component: RescontraPage,
      animated: true,
      mode:'ios',
      backdropDismiss: false,
      cssClass:'rescontra-modal',
    })
  

    return await modal.present();
  }
  async estudiante(){
    const modal = await this.modalCtrl.create({
      component: EstudiantePage,
      animated: true,
      mode:'ios',
      backdropDismiss: false,
      cssClass:'estudiante-modal',
    })
  

    return await modal.present();
  }


}
