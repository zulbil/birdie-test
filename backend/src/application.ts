import "reflect-metadata";

import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";

import * as path from "path";
import { Sequelize } from "sequelize-typescript";
import { authController } from "./controllers/auth.controller";
import { statisticsController } from "./controllers/statistics.controller";
import errorMiddleware from "./middleware/error.middleware";

const sequelize = new Sequelize("birdietest", "test-read", "xnxPp6QfZbCYkY8", {
  host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
  dialect: "mysql"
});

sequelize.addModels([__dirname + "/models/*.model.ts"]);

const app = express();

if(process.env.NODE_DEV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
}

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

if(process.env.NODE_DEV === 'production') {
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });
}

app.use("/auth", authController);
app.use("/stats", statisticsController);

app.use(errorMiddleware);

export default app;
