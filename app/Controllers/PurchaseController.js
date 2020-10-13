import { ProxyState } from "../AppState.js"
import { purchaseService } from "../Services/PurchaseService.js"

function _draw(){
  let items = ProxyState.inventory
  
}


function _drawPurchases() {
  let purchasedItems = ProxyState.purchasedItems
  document.getElementById('purchase').innerHTML = /*htm*/`
  <h1>Purchases</h1>
  <div>You bought ${purchasedItems.toString()}</div>
  `
}


export default class PurchaseController {
  constructor() {
    // console.log("Did this work?")---NOTE got basic draw function to work
  }

  purchaseItem(itemName){
    purchaseService.purchaseItem(itemName)
    _drawPurchases()
  }
}