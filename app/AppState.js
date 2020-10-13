import Wallet from "./Models/Wallet.js"
import Purchase from "./Models/Purchase.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  inventory = {
    trailMix: new Purchase("Trail Mix", 3),
    potatoChip: new Purchase("Chips", 2),
    fruitSnack: new Purchase("Fruit Snacks", 2.50)
  }

  /** @type {Wallet} */
  wallet = new Wallet()

  /** @type {Purchase[]} */
  purchasedItems = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
