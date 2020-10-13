import { ProxyState } from "../AppState.js" 

class PurchaseService {
  purchaseItem(itemName) {

    let inventory = ProxyState.inventory
    let wallet = ProxyState.wallet
    if(wallet.funds >= inventory[itemName].cost){
      wallet.funds -= inventory[itemName].cost
      console.log("you bought this")
      ProxyState.wallet = wallet
      ProxyState.purchasedItems = [...ProxyState.purchasedItems, inventory[itemName]]
    }else{
      console.log("You do not have enough funds for this item")
    }
    inventory[itemName]
  }
  constructor() {
  }
}

export const purchaseService = new PurchaseService()