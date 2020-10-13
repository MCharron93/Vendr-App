import {ProxyState} from "../AppState.js";

class ChangeService {

  addMoney(){
    let wallet = ProxyState.wallet
    wallet.funds += 0.25
    ProxyState.wallet = wallet
    // console.log(wallet)---NOTE logged wallet amount before populating to page
    }

  constructor(){
    // console.log("Change Service connected")---NOTE logged connection of service page
  }
}


export const changeService = new ChangeService()

