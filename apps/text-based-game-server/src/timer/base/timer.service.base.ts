/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Timer as PrismaTimer,
  Game as PrismaGame,
  Scene as PrismaScene,
} from "@prisma/client";

export class TimerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TimerCountArgs, "select">): Promise<number> {
    return this.prisma.timer.count(args);
  }

  async timers<T extends Prisma.TimerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimerFindManyArgs>
  ): Promise<PrismaTimer[]> {
    return this.prisma.timer.findMany<Prisma.TimerFindManyArgs>(args);
  }
  async timer<T extends Prisma.TimerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimerFindUniqueArgs>
  ): Promise<PrismaTimer | null> {
    return this.prisma.timer.findUnique(args);
  }
  async createTimer<T extends Prisma.TimerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimerCreateArgs>
  ): Promise<PrismaTimer> {
    return this.prisma.timer.create<T>(args);
  }
  async updateTimer<T extends Prisma.TimerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimerUpdateArgs>
  ): Promise<PrismaTimer> {
    return this.prisma.timer.update<T>(args);
  }
  async deleteTimer<T extends Prisma.TimerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimerDeleteArgs>
  ): Promise<PrismaTimer> {
    return this.prisma.timer.delete(args);
  }

  async getGame(parentId: string): Promise<PrismaGame | null> {
    return this.prisma.timer
      .findUnique({
        where: { id: parentId },
      })
      .game();
  }

  async getScene(parentId: string): Promise<PrismaScene | null> {
    return this.prisma.timer
      .findUnique({
        where: { id: parentId },
      })
      .scene();
  }
}
