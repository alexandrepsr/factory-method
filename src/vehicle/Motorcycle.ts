import IVehicle from "./IVehicle";

export default class MotorCycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Starting delivery");
  }
  getCargo(): void {
    console.log("Picking up the package");
  }
}
