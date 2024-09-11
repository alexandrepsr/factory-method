import CarTransport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import Transport from "./transport/Transport";

let typeTransport = "CAR";
let transport: Transport;

if (typeTransport == "CAR") {
  transport = new CarTransport();
} else if (typeTransport == "MOTORCYCLE") {
  transport = new MotorcycleTransport();
} else {
  throw new Error("Transport not found");
}

transport.startTransport();
