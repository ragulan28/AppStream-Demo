import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'music.html'
})
export class MusicPage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }
  // presentPopover() {
  //   let popover = this.popoverCtrl.create(MyPopOverPage);
  //   popover.present();
  // }

}
