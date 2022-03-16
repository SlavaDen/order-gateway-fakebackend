import {Controller, Get, Post} from "@nestjs/common";

@Controller("fake")
export class FakeController {

    @Get("/:order")
    get() {
        return {
          result: true
        };
    }

    @Post("/:order")
    post() {
        return {
          result: true
        };
    }
}
