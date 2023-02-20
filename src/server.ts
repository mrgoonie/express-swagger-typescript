import "reflect-metadata";
// import { createConnection } from "typeorm";
import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";

import Router from "./routes";
// import dbConfig from "./config/database";

const PORT = process.env.PORT || 8000;
console.log("PORT :>> ", PORT);

const app: Application = express();

app.use(express.json());
app.use(express.static("public"));

app.use(
	"/docs",
	swaggerUi.serve,
	swaggerUi.setup(undefined, {
		swaggerOptions: {
			url: "/swagger.json",
		},
	})
);

app.use(Router);

app.listen(PORT, () => {
	console.log("Server is running on port", PORT);
});
