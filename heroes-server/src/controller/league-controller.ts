import { getRepository } from "typeorm";
import { League } from "../entity/league";
import { BaseController } from "./base-controller";

export class LeagueController extends BaseController<League> {
    constructor() {
        super();
        this.repository = getRepository(League);
    }
}