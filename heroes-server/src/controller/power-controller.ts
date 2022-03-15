import { getRepository } from "typeorm";
import { Power } from "../entity/power";
import { BaseController } from "./base-controller";

export class PowerController extends BaseController<Power> {
    constructor() {
        super();
        this.repository = getRepository(Power);
    }
}