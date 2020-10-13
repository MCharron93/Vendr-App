import { ProxyState } from "../AppState.js" 
import Wallet from "../Models/Wallet.js"

class PurchaseService {
  purchaseItem(itemName) {
    let inventory = ProxyState.inventory
    let wallet = ProxyState.wallet
    if(wallet.funds >= inventory[itemName].cost){
      wallet.funds -= inventory[itemName].cost
      ProxyState.wallet = wallet
      ProxyState.purchasedItems = [...ProxyState.purchasedItems, inventory[itemName]]
    }
    inventory[itemName]
  }
  constructor() {
    console.log("you've made a purchase")
  }
}

export const purchaseService = new PurchaseService()