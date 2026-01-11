import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt.guard";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get("me")
  async me(@Req() req) {
    const user = await this.usersService.findById(req.user.userId);

    return {
      id: user.id,
      email: user.email,
      balance: user.balance,
    };
  }
}
