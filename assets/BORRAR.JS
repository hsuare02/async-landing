const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6a3b8a249msh697e381274f8b85p1bad08jsnd7061f68ac34',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UCLWCLAx6Gbs2J75Ts5IAiKA&part=snippet%2Cid&order=date&maxResults=9', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));