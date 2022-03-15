import { Module } from "@nestjs/common";
import { FakeController } from "./fake.controller";

@Module({
  providers: [],
  controllers: [FakeController],
  imports: [

  ]
})
export class FakeModule {}
