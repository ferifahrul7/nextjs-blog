import Header from "./Header"
const Layout = ({ children }) => {
	return (
		<div className="container font-Poppins">
			<Header/>
			<main>
				{children}
			</main>
		</div>
	)
}

export default Layout
