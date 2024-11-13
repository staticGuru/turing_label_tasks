export default function Home() {
	return (
		<div className=''>
			<div className='h-[25dvh]'>asdf</div>
			<div className='bg-[#121212] h-[50dvh]'>hi</div>
			<div className='bg-[#121212] relative'>
				<div
					className='h-[25dvh] bg-background relative'
					style={{
						borderRadius: '100dvh 100dvh 0px 0px/5dvh 5dvh 0 0px ',
					}}
				>
					<div
						className='absolute top-0 left-1/4 w-1/2 h-full border-t-2 border-white'
						style={{
							borderRadius: '100dvh 100dvh 0px 0px/5dvh 5dvh 0 0px ',
						}}
					></div>
				</div>
			</div>

			{/* <NavigatorCircle />
			<NavigatorCircle />
			<NavigatorCircle /> */}
		</div>
	);
}