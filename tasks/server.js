import config from './config.js'
import liveServer from "live-server"

export const server = (done) => {
  liveServer.start({
    port: 3000,
    host: "0.0.0.0",
    root: config.dest,
    open: false,
  });

  done()
}
