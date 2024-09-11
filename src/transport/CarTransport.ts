import Car from "../vehicle/Car";
import IVehicle from "../vehicle/IVehicle";
import Transport from "./Transport";

export default class CarTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Car();
  }
}
