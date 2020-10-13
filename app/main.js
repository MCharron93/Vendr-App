import ChangeController from "./Controllers/ChangeController.js";
import ValuesController from "./Controllers/ValuesController.js";
import PurchaseController from "./Controllers/PurchaseController.js"

class App {
  valuesController = new ValuesController();
  changeController = new ChangeController();
  purchaseController = new PurchaseController()
}

window["app"] = new App();
