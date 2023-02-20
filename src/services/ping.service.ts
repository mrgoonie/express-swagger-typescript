import PingEntity from "../entities/PingEntity";

export default class PingService {
	public async getMessage(): Promise<PingEntity> {
		return {
			message: "pong",
		};
	}
}
