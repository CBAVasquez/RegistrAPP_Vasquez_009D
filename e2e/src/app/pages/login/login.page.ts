import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RescontraPage } from '../rescontra/rescontra.page';
import { DocentePage } from '../docente/docente.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(
      public modalCtrl: ModalController,){}

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




}
