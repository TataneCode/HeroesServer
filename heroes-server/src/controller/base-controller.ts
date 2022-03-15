import { getRepository, Repository } from "typeorm";
import { NextFunction, Request, Response } from "express";

export abstract class BaseController<Entity> {
    
    protected repository: Repository<Entity>;

    async all(request: Request, response: Response, next: NextFunction) {
        return this.repository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.repository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.repository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let heroToRemove = await this.repository.findOne(request.params.id);
        await this.repository.remove(heroToRemove);
    }
}