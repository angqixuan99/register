import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = 'wht your name?';

onChangeText(){

  this.text = 'Ang Qi Xuan';
}
  constructor() {}

}
