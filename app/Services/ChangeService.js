import {ProxyState} from "../AppState.js";

class ChangeService {

  addMoney(){
    let wallet = ProxyState.wallet
    wallet.funds += 0.25
    ProxyState.wallet = wallet
    console.log(wallet)
    }

  constructor(){
    console.log("Change Service connected")
  }
}


export const changeService = new ChangeService()

