// import NavigatorCircle from '@/components/NavigatorCircle';

export default function Home() {
	return (
		<div className=''>
			<div className='h-[25dvh]'>asdf</div>
			<div className='bg-[#121212] h-[50dvh]'>hi</div>
			<div className='bg-[#121212]'>
				<div
					className='h-[25dvh] bg-background'
					style={{
						borderRadius: '100dvh 100dvh 0px 0px/5dvh 5dvh 0 0px ',
						maskImage: 'linear-gradient(to right, transparent, white, transparent)',
						WebkitMaskImage: 'linear-gradient(to right, transparent, white, transparent)',
					}}
				>
					<div className='h-full border-white border-t-2'></div> 
				</div>
			</div>

			{/* <NavigatorCircle />
			<NavigatorCircle />
			<NavigatorCircle /> */}
		</div>
	);
}