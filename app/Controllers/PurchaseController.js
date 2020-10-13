import { ProxyState } from "../AppState.js"
import { purchaseService } from "../Services/PurchaseService.js"

function _draw() {
  
}


export default class PurchaseController {
  constructor() {
    _draw()
  }

  purchaseItem(itemName){
    console.log("Did this work?")
    purchaseService.purchaseItem(itemName)
  }
}