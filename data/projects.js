import RazerStoreBD from '../public/assets/images/projects/RazerStoreBD.png';
import lang_fastapi from '../public/assets/images/projects/lang_fastapi.png';
import realtime_mask_detection from '../public/assets/images/projects/realtime_mask_detection.jpg';


export const ProjectList = [
	{
		id: 1,
		title: 'Razer Store Bangladesh',
		des: 'Developed a dynamic MVC pattern architecture website where Razer products (which are shipped from the US) will be delivered through a user-friendly, strong security, and reliable purchase system.',
		tech: ['PHP', 'JS', 'AJAX', 'HTML5', 'CSS3', 'Bootstrap', 'JSON', 'MySQL'],
		url: 'https://rtxserver.com/',
		image: RazerStoreBD,
	},
	{
		id: 2,
		title: 'Language Detection & Translation using FastApi',
		des: "🌐 Developed a translation-detection API where, using FastAPI, a web server exposes a /translate, a /predict and a /result route. On the backend, using async, a pretrained and a trained DL model, the server uses a SQLite database to store the translations.",
		tech: ['FastApi', 'PyTorch', 'Docker', 'NLP', 'Sqlite Database'],
		url: 'https://github.com/MdAliAhnaf/language_translate-detect_fastapi-docker',
		image: lang_fastapi,
	},
	{
		id: 3,
		title: 'Face Mask Detection in Real-Time using transfer learning via Mobilenet_V2',
		des: "🚀 Mobile Net V2 was trained using custom and Kaggle datasets of 9.5k human face pictures with properly, poorly, and incorrectly worn masks. The model scores 95–96 percent validation after haarcascade_frontalface_alt2.xml detects the frontal face area in real time.",
		tech: ['Tensorflow', 'Keras', 'openCV-2', 'CNN', 'Transfer-learning'],
		url: 'https://github.com/MdAliAhnaf/language_translate-detect_fastapi-docker',
		image: realtime_mask_detection,
	},
];
