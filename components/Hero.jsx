import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GreetingList } from '../data/greetings';
import UserImg from '../public/assets/images/icons/icon-565x565.png';

const Hero = () => {
	const [arrItem, setArrItem] = useState(0);

	const nextItem = () => {
		setArrItem((prevCount) => {
			const check =
				prevCount >= GreetingList.length - 1 ? 0 : Number(prevCount) + 1;
			localStorage.setItem('arrItem', check);
			return check;
		});
	};

	useEffect(() => {
		const initialValue = localStorage.getItem('arrItem');
		if (initialValue) setArrItem(initialValue);
	}, []);

	return (
		<section>
			<div className='flex items-center justify-center md:flex-row flex-col'>
				<div className='rounded-full border-[3px] border-sh-blue relative scale-95 hover:scale-100 transition ease-in shadow-lg'>
					<div className='h-44 w-44 select-none relative group'>
						<Image
							className='rounded-full w-full h-full'
							src={UserImg}
							alt='AhnafAvatar'
							layout='fill'
							draggable='false'
						/>
						<div className='absolute bottom-0 flex-col items-center hidden mb-44 group-hover:flex'>
							<span className='relative z-10 p-2 text-xs leading-none text-sh-white whitespace-no-wrap bg-sh-dark shadow-lg rounded-md'>
								{"Hey, It's so nice to see you here, thanks for visiting !"}
							</span>
							<div className='w-3 h-3 -mt-2 rotate-45 bg-sh-dark'></div>
						</div>
					</div>
				</div>
				<div className='ml-0 md:ml-16'>
					<div className='relative group inline-block'>
						<h2
							onClick={nextItem}
							className='text-3xl font-bold animate-up bg-gradient-to-r from-sh-blue to-sh-blue mb-5 tracking-widest inline-block cursor-pointer select-none'
						>
							{GreetingList[arrItem].text}
							<span className='italic'>!</span>
						</h2>
						<div className='absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex'>
							<span className='relative z-10 p-2 text-xs leading-none text-sh-white whitespace-no-wrap bg-sh-dark shadow-lg rounded-md'>
								{GreetingList[arrItem].lang}
							</span>
							<div className='w-3 h-3 -mt-2 rotate-45 bg-sh-dark'></div>
						</div>
					</div>

					<h1 className='text-2xl font-normal leading-10'>
						<span className='block'>
							I am{' '}
							<span className='font-bold tracking-widest animate-up bg-gradient-to-r from-sh-purple to-sh-purple cursor-default select-none'>
								Md. Ali Ahnaf
							</span>
							, a Computer-Vision Engineer, ML Researcher and a Back-End web developer.
						</span>
						I conduct research and develop cutting-edge initiatives on various CNN sequential model architectures within the field of deep learning to create impactful research and applications, and I use APIs like FastApi and Flask to integrate and develop better web applications. 
						<span className='mt-5 block'>
						My commitment to continuous learning keeps me abreast of cutting-edge technologies, allowing me to adapt rapidly in a fast-paced and dynamic industry and build excellent software. Moreover, I am constantly improving my algorithms, problem-solving skills, data structures, and Oracle-SQL database.
						</span>
					</h1>
				</div>
			</div>
		</section>
	);
};

export default Hero;
