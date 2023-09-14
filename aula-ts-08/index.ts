type Game8 = {
    id: number;
    platform: {
      id: number;
      name: string;
    }
    title: string;
    publisher: string;
    launch?: string | Date;
  }
  
  
  
  const game8: Game8 = {
    id: 1,
    platform: {
      id: 1,
      name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // pode ser um Date. também pode ser vazio
  }
  
  const games8: Game8[] = [game];
  
  function play8(game: Game8) {
    // runs the game
    console.log(game);
  }