import { Game } from "./game";

export interface Score {
    games: Game,
    timeStamp: Date;
    level: number
}
