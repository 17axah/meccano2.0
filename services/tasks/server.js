import config from '../config.js'
import liveServer from "live-server"
import chalk from 'chalk';
import qrcode from 'qrcode-terminal';
import os from 'os';

function getNetworkIp() {
  const interfaces = os.networkInterfaces().Ethernet

  return interfaces.find((item) => item.family === 'IPv4')?.address
}

const LOCAL_URL = `http://127.0.0.1:${config.port}`
const NETWORK_URL = `http://${getNetworkIp()}:${config.port}`

export const server = (done) => {
  liveServer.start({
    port: config.port,
    host: "0.0.0.0",
    root: config.dest,
    open: false,
    logLevel: 0
  });

  console.log(chalk.blue('Local: ') + chalk.blue.underline(LOCAL_URL));
  console.log(chalk.gray('Network: ') + chalk.gray.underline(NETWORK_URL))

  qrcode.generate(NETWORK_URL, { small: true });

  done()
}
