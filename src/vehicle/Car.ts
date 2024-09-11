import IVehicle from "./IVehicle";

export default class Car implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Starting route");
  }
  
  getCargo(): void {
    console.log("Picking up the passengers");
  }
}
