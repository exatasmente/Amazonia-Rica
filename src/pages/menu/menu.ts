import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { CartPage } from '../cart/cart';

import { Storage } from '@ionic/storage/dist/storage';
import { LoginPage } from '../login/login';
import { OrdersPage } from '../orders/orders';
import { AboutPage } from '../about/about';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  homePage : any;
  hasLogin : any;
  userData : any;
  constructor(public storage : Storage , public modalCrtl : ModalController , public navCtrl: NavController, public navParams: NavParams) {
    this.homePage = HomePage;
    
  }

  ionViewDidEnter(){
    
    this.storage.ready().then(()=>{
      this.storage.get("userLoginInfo").then( (userInfo)=>{
        if(userInfo != null){
          this.userData = userInfo;
          console.log(this.userData);
          this.hasLogin = true;
        }else{
          this.hasLogin = false;
        }
      })
    })
  }
  openAboutPage(){
    this.navCtrl.push(AboutPage);
  }
  openPageAvatar(){
    if(!this.hasLogin){
      this.navCtrl.push(LoginPage);
    }
  }
  openHomePage(){
      this.navCtrl.popToRoot();

  }
  openCartPage(){
    this.navCtrl.push(CartPage);
  }
  openOrdersPage(){
    this.navCtrl.push(OrdersPage);
  }

  logout(){
    this.storage.remove("userLoginInfo").then( ()=>{
      this.userData = null;
      this.hasLogin = false;
    });
  }
}
