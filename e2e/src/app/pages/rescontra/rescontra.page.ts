import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rescontra',
  templateUrl: './rescontra.page.html',
  styleUrls: ['./rescontra.page.scss'],
})
export class RescontraPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss();

  }
}
