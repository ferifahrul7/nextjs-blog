import Link from "next/link"
const Header = () => {
	return (
		<>
			<header>
				<nav className="container flex items-center justify-between py-4 mt-5 sm:mt-12">
					<div className="py-1">
						<h1 className="text-2xl font-bold text-sky-700">My Profile</h1>
					</div>
					<ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-blue-900 uppercase text-xs">
						<li className="cursor-pointer nav-link">
							<Link href="/">Home</Link>
						</li><li className="cursor-pointer nav-link">
							<Link href="/about">Tentang</Link>
						</li>
						<li className="cursor-pointer nav-link">Kontak</li>
						<li className="cursor-pointer nav-link">Portfolio</li>
						<button type="button" className="bg-indigo-500 hover:bg-indigo-800 px-7 py-3 rounded-md text-white uppercase">Call</button>
					</ul>
					<div className="flex sm:hidden flex-1 mx-3 justify-end"><i className="text-2xl fas fa-bars"></i></div>
				</nav>
			</header>
		</>
	)
}

export default Header
