import IVehicle from "../vehicle/IVehicle";
import MotorCycle from "../vehicle/Motorcycle";
import Transport from "./Transport";

export default class MotorcycleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new MotorCycle();
  }
}
