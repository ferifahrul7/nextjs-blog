import Image from "next/image"
const Home = () => {
	return (
		<div>
			<div class="mt-24 lg:mt-30 grid place-items-center">
				<section className="bg-blue-200 rounded-lg shadow-lg lg:w-6/12">
					<div className="-translate-y-24 text-center">
						<Image src="/assets/images/photo.jpg" className="shadow-lg" width={200} height={200} />
						<div className="mx-auto">
							<h1 className="text-2xl text-center font-bold text-blue-900 mt-2">Feri Fahrul Nurashari</h1>
							<h2 className="text-sm font-bold">Web Developer</h2>
							<div className="text-sky-900 text-justify px-10 pt-3">
								<p>
									Hello there! Before talking about qualifications and professional abilities, I would like to introduce myself.
								 
									I am Feri Fahrul Nurashari and I am from Indonesia. Taking web development as a profession not only fulfils my pocket but also my heart because it has been my passion since my early teenage.
								 
									I believe that people should do things in which they are good at or in which their heart lays. That's why I chose freelance web development as my career because I believe I'm good at this and mas I am always honest and I am never afraid of doing hard work.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div >
		</div>
	)
}

export default Home
