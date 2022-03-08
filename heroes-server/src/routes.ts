import { HeroController } from "./controller/HeroController";

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
}];