import { Game } from "./game";

export interface Score {
    games: Game,
    nbMistake: number,
    timeStamp: Date,
    level: number,
    timer: number,
    game: string
}
