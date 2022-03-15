import { getRepository } from "typeorm";
import { Hero } from "../entity/hero";
import { BaseController } from "./base-controller";

export class HeroController extends BaseController<Hero> {
    constructor() {
        super();
        this.repository = getRepository(Hero);
    }
}