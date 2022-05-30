// import { useState } from "react/cjs/react.production.min";
import { useState } from "react";

// const [color, setColor] = useState("btn-success");
//

// function iluminar() {}

//create your first component
const Home = () => {
	const [color, setColor] = useState(false);

	return (
		<>
			<div className="container text-center">
				<div>
					<button
						type="button"
						className={
							"btn btn-success rounded-circle" +
							(color === true ? "iluminado" : " ")
						}
						onClick={() => setColor(false)}></button>
				</div>
				<div>
					<button
						type="button"
						class={
							"btn btn-success rounded-circle" +
							(color === true ? "iluminado" : " ")
						}
						onClick={() => setColor(false)}></button>
				</div>
				<div>
					<button
						type="button"
						class={
							"btn btn-success rounded-circle" +
							(color === true ? "iluminado" : " ")
						}
						onClick={() => setColor(false)}></button>
				</div>
			</div>
		</>
	);
};

export default Home;
