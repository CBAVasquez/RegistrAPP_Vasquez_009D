import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor( public modalCtrl: ModalController,) { }

  ngOnInit() {
  }
  async dismiss(){
    await this.modalCtrl.dismiss();

}
}
