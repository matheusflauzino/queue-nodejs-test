import "dotenv/config";
import Queue from "./app/lib/Queue";
import RegistrationsMail from "./app/jobs/RegistrationsMail";

Queue.process(RegistrationsMail.handle);
