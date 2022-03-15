import { HeroController } from "./controller/hero-controller";
import { LeagueController } from "./controller/league-controller";
import { PowerController } from "./controller/power-controller";

export const Routes = [{
    method: "get",
    route: "/heroes",
    controller: HeroController,
    action: "all"
}, {
    method: "get",
    route: "/heroes/:id",
    controller: HeroController,
    action: "one"
}, {
    method: "post",
    route: "/heroes",
    controller: HeroController,
    action: "save"
}, {
    method: "delete",
    route: "/heroes/:id",
    controller: HeroController,
    action: "remove"
}, {
    method: "get",
    route: "/leagues",
    controller: LeagueController,
    action: "all"
}, {
    method: "get",
    route: "/powers",
    controller: PowerController,
    action: "all"
}];