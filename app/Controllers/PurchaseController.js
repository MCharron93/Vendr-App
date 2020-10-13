import { ProxyState } from "../AppState.js"
import { purchaseService } from "../Services/PurchaseService.js"

function _draw() {


}


function _drawPurchases() {
  let purchasedItems = ProxyState.purchasedItems
  let template = ""
  template +=`
  <h1>Purchases</h1>
  <div>You bought `  
  for (let i = 0; i < purchasedItems.length; i++) {
    template += purchasedItems[i].name 
    template += ", "
  }
  template += `
  </div>`
  document.getElementById('purchase').innerHTML = template
}


export default class PurchaseController {
  constructor() {
    // console.log("Did this work?")---NOTE got basic draw function to work
    ProxyState.on('purchasedItems', _drawPurchases)
  }

  purchaseItem(itemName) {
    purchaseService.purchaseItem(itemName)
    _drawPurchases()
  }
}