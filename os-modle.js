const os = require("os");
console.log(os.uptime());

const crrentOs = {
  name: os.type(),
  release: os.release(),
  freemem: os.freemem(),
  totalmem: os.totalmem(),
};

console.log(crrentOs);
