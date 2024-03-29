
export const fetchAllGames = async () => {
    const options = {
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": "b8fbf23572msh5937faec3ef7c60p1d7c92jsnfb7c9fddb975",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
  
    const response = await fetch(options.url, { headers: options.headers });
    return await response.json();
  };

  export const fetchGameByID = async (id:string) => {
    const options = {
      url: `https://free-to-play-games-database.p.rapidapi.com/api/game/?id=${id}`,
      headers: {
        'X-RapidAPI-Key': 'b8fbf23572msh5937faec3ef7c60p1d7c92jsnfb7c9fddb975',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
  
    const response = await fetch(options.url, { headers: options.headers });
    return await response.json();
  };

  export const fetchGameByPlatform = async (platform:string) => {
    const options = {
      url: `https://free-to-play-games-database.p.rapidapi.com/api/games/?platform=${platform}`,
      headers: {
        'X-RapidAPI-Key': 'b8fbf23572msh5937faec3ef7c60p1d7c92jsnfb7c9fddb975',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
  
    const response = await fetch(options.url, { headers: options.headers });
    return await response.json();
  };
  
  export const fetchGameByCategories = async (category:string) => {
    const options = {
      url: `https://free-to-play-games-database.p.rapidapi.com/api/games/?category=${category}`,
      headers: {
        'X-RapidAPI-Key': 'b8fbf23572msh5937faec3ef7c60p1d7c92jsnfb7c9fddb975',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
  
    const response = await fetch(options.url, { headers: options.headers });
    return await response.json();
  };