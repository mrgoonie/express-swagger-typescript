import type { NextFunction, Request, Response } from "express";

import PingService from "../services/ping.service";
import { Get, Route } from "tsoa/dist";

interface ResponseObject<T> {
	status: number;
	data: T | any;
}

@Route("ping")
export default class PingController {
	@Get()
	async getMessage() {
		const svc = new PingService();
		const data = await svc.getMessage();
		let result: ResponseObject<PingService> = { status: 1, data };
		return result;
	}
}
