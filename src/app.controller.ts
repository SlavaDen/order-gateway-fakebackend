import {Controller, Get, Post} from "@nestjs/common";

@Controller("app")
export class AppController {

    @Get("/:order")
    get() {
        return {
          result: true
        };
    }

    @Post("/:order")
    test() {
        return {
          result: true
        };
    }

    @Post()
    test1() {
        return {
          result: true
        };
    }
}
