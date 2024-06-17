export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '701d4aa92cmsh63fb5aa991d2603p15006ajsnfb911c45777d',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '701d4aa92cmsh63fb5aa991d2603p15006ajsnfb911c45777d',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) =>{
    
    const response = await fetch(url, options)
    const data = await response.json()

    return data

}