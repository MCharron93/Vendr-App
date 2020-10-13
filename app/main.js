import ChangeController from "./Controllers/ChangeController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  changeController = new ChangeController()
}

window["app"] = new App();
