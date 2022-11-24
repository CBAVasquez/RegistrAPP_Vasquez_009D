import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { LoginestPage } from '../loginest/loginest.page';
import { RescontraPage } from '../rescontra/rescontra.page';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async login(){
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      animated: true,
      mode:'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    })
    return await modal.present();
  }

  async loginest(){
    const modal = await this.modalCtrl.create({
      component: LoginestPage,
      animated: true,
      mode:'ios',
      backdropDismiss: false,
      cssClass:'loginest-modal',
    })
  

    return await modal.present();
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


}
