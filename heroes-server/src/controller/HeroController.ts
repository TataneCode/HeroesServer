import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Hero } from "../entity/hero";

export class HeroController {

    private heroRepository = getRepository(Hero);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.heroRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.heroRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.heroRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let heroToRemove = await this.heroRepository.findOne(request.params.id);
        await this.heroRepository.remove(heroToRemove);
    }

}