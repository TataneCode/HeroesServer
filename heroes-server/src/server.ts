import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { Routes } from './routes';
import { Hero } from './entity/hero';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import { League } from './entity/league';
import { Power } from './entity/power';

createConnection().then(async connection => {

    require('dotenv').config();
    // create express app
    const app = express();
    app.use(helmet());
    app.use(compression());
    app.use(cors());
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new users for test
    var league = new League();
    league.name = 'Gotham city';

    var power = new Power();
    power.name = 'Cleverness';
    power.strength = 5;

    var hero = new Hero();
    hero.name = 'Batman';
    hero.alias = 'Bruce Wayne';
    hero.power = power;
    hero.league = league;
    hero.createdOn = new Date();

    await connection.manager.save(league);
    await connection.manager.save(power);
    await connection.manager.save(hero);

    console.log(`Express server has started on port 3000. Open URL :
    * http://localhost:3000/heroes
    * http://localhost:3000/leagues
    * http://localhost:3000/powers `);

}).catch(error => console.log(error));
