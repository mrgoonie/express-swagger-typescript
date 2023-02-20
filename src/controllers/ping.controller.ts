import PingService from "../services/ping.service";
import PingEntity from "../entities/PingEntity";
import { Get, Route } from "tsoa/dist";

// This wouldn't work
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
		let result: ResponseObject<PingEntity> = { status: 1, data };
		return result;
	}
}

/**
 * This will work normally:
 */
// interface ResponseObject {
// 	status: number;
// 	data: PingEntity;
// }

// @Route("ping")
// export default class PingController {
// 	@Get()
// 	async getMessage() {
// 		const svc = new PingService();
// 		const data = await svc.getMessage();
// 		let result: ResponseObject = { status: 1, data };
// 		return result;
// 	}
// }
