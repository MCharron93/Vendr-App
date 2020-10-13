import { ProxyState } from "../AppState.js";
import { changeService } from "../Services/ChangeService.js";


//Private Function
function _draw() {
  let wallet = ProxyState.wallet.funds
  document.getElementById('funds').innerHTML = /*html*/`
  <h1>Wallet</h1>
  <h2>Total funds: ${wallet}</h2>
  <button class="btn btn-primary" onclick="app.changeController.addMoney()">Add $0.25</button>
  `
}

export default class ChangeController {
  constructor() {
    _draw()
    // console.log("Change controller connected!")---NOTE Logged at start up to ensure all pages links
    ProxyState.on('wallet', _draw)
  }
  addMoney() {
    // console.log("money has been added")---NOTE logged to ensure button functionality is working
    changeService.addMoney()
    // _draw()
  }

}