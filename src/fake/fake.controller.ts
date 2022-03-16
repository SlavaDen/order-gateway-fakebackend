import {Controller, Get, Param, Post, Req} from "@nestjs/common";

@Controller("fake")
export class FakeController {

    @Get("/:order")
    get(@Param() { order }) {
        return {
          request: order,
          result: true
        };
    }

    @Post("/:order")
    post(@Param() { order }) {
        return {
          request: order,
          result: true
        };
    }
}
