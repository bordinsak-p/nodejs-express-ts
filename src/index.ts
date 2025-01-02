import express from "express";
import morgan from "morgan";
import MessagesConstants from "./constants/messages";
import ValiableConstants from "./constants/valiables";
import db from "./db";
import Helper from "./helpers/helpers";
import router from "./routes/index";

class App {
  private app = express();
  private port = 8080;
  private helper = new Helper();

  /**
   * Initialize the app
   */
  constructor() {
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.startServer();
  }

  /**
   * Initialize middlewares
   */
  private initializeMiddlewares() {
    // Allow the app to accept JSON on the body
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Set UUID track for each request and log all requests to the console
    morgan.token("track", () => this.helper.generateUuid("splits"));
    this.app.use(morgan(this.helper.morganHandle("track")));
  }

  /**
   * Initialize routes
   */
  private initializeRoutes() {
    this.app.use(ValiableConstants.API_URL, router);
  }

  /**
   * Start the server
   */
  private startServer() {
    this.app.listen(this.port, () => {
      console.log(
        MessagesConstants.SERVER_IS_RUNNING.replace(
          "{port}",
          this.port.toString()
        )
      );
      db;
    });
  }
}

// Create a new instance of the App class
new App();
