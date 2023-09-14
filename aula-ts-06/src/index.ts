
type Game6 = {
    id: number,
    platform: {
        id: number,
    name: string
    },
    title: string,
    publisher: string,
    launch: Date | string
}

const game6: Game6 = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // pode ser um Date. É opcional (para jogos ainda não lançados).
}

const games6: Game6[] = [game];

function play6(game: Game6): void {
    // runs the game
    console.log(game6);
}
play(game6);