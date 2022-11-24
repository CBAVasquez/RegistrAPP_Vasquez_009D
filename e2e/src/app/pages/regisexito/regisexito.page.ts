import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-regisexito',
  templateUrl: './regisexito.page.html',
  styleUrls: ['./regisexito.page.scss'],
})
export class RegisexitoPage implements OnInit {

  constructor(public modalCtrl: ModalController,) { }

  ngOnInit() {
  }
  async dismiss(){
    await this.modalCtrl.dismiss();


}
}
