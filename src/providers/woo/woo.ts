import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

@Injectable()
export class WooProvider {
  wooCommerce : any;
  constructor() {
    this.wooCommerce = WC({
      url:"http://amazoniaricaapi.000webhostapp.com/",
      consumerKey:"ck_e5127b8d77116b6a7b28bad8fc4134a2bf09348d",
      consumerSecret:"cs_760cc16a471d6e39c556b5ad4e718dd2c698d16a",
      
    });
  }
  init(){
    return this.init;
  }
}
