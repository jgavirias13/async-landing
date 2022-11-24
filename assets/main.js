const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8FusGS_pCUE2EUN-9pQaFQ&hl=en&gl=US';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '186044a35cmsh542c3d1efdceed4p19b3cejsn9f8ec1c1c8f3',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

const contentDiv = null || document.getElementById('content');

async function getVideos() {
  const response = await fetch(API, options);
  const data = await response.json();
  return data;
}

(async () => {
	try {
		const videos = await getVideos();
		let view = `
			${videos.contents.map(video => `
			<div class="group relative">
				<div
					class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					<img src=${video.video.thumbnails[3].url} alt="${video.video.title}" class="w-full">
				</div>
				<div class="mt-4 flex justify-between">
					<h3 class="text-sm text-gray-700">
						<span aria-hidden="true" class="absolute inset-0"></span>
						${video.video.title}
					</h3>
				</div>
			</div>
		`).join('')}`;

		contentDiv.innerHTML = view;
	} catch(error) {
		console.log(error);
	}
})();