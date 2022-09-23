const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCLWCLAx6Gbs2J75Ts5IAiKA&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6a3b8a249msh697e381274f8b85p1bad08jsnd7061f68ac34',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


//ASINC AWAIT
async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json(); //convierte la respuesta a jason
    return data;
}

//funcion que se invoca a si misma (en vez de crear una función que despues llame a la funcion fetchData)
(async () =>{
    try{
        const videos= await fetchData(API);
        //template html
        let view = `
        ${videos.items.map(video =>`
        <div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md 
        overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0,4).join('')}   
        `;
        content.innerHTML =view;
    } catch (error){
        console.log(error);
    }
})();

//se usa items porque es la estructura de la api, se puede ver en la respuesta de la prueba https://rapidapi.com/ytdlfree/api/youtube-v31

