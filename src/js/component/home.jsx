import React, { useState } from "react";

const Home = () => {
	const [input, setInput] = useState("");
	const [arrTodo, setArrTodo] = useState([]);
	const [deleteShown, setDeleteShown] = useState(false);

	return (
		<div className="container">
			<div className="mb-3 w-75 mx-auto">
				<label htmlFor="exampleInputEmail1" className="form-label">
					<h2 className="h2">To-dos</h2>
				</label>
				<div className="d-flex">
					<input
						type="text"
						className="form-control"
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
					/>
					<button
						type="button"
						className="btn btn-light"
						onClick={() => {
							setArrTodo([...arrTodo, input]);
							setInput("");
						}}>
						Add
					</button>
				</div>
				{arrTodo.map((e, i) => {
					return (
						<div
							className="form-control"
							key={i}
							onMouseEnter={() => setDeleteShown(i)}
							onMouseLeave={() => setDeleteShown(null)}>
							{e}{" "}
							{deleteShown == i && (
								<button
									type="button"
									className="btn-close"
									aria-label="Close"
									onClick={() => {
										setArrTodo(
											arrTodo.filter(
												(v, index) => index !== i
											)
										);
									}}></button>
							)}
						</div>
					);
				})}
				<div>
					{" "}
					<p className="h6">
						{" "}
						{arrTodo.length > 0
							? arrTodo.length + " items left"
							: "add something to-do"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
