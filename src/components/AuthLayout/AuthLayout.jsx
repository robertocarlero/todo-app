export default function Layout(props) {
	return (
		<section className="bg-slate-200 w-full h-screen flex justify-center items-center">
			<div className="p-10 bg-white rounded shadow-md">
				<h2 className="text-4xl font-bold text-center mb-10">
					{props.title}
				</h2>
				{props.children}
			</div>
		</section>
	);
}
