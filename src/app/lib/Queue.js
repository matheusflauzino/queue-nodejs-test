import Queue from "bull";
import redisConfig from "../../config/redis";

import RegistrationMail from "../jobs/RegistrationsMail";

const mailQueue = new Queue(RegistrationMail.key, redisConfig);

export default mailQueue;
