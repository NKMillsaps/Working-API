import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<div className="input-group mb-3">
									<input
										name="todo"
										type="text"
										className="form-control"
										placeholder="Recipient's username"
										aria-label="Recipient's username"
										aria-describedby="button-addon2"
									/>
								</div>
								<button
									onClick={() => actions.addTodo(document.querySelector("[name=todo]").value)}
									className="btn btn-secondary">
									{" "}
									Add task
								</button>
							</div>
						);
					}}
				</Context.Consumer>

				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.todo.map((item, index) => {
								return (
									<li key={index} className="list-group-item d-flex justify-content-between">
										<p> {item.todo}</p>
									</li>
								);
							});
						}}
					</Context.Consumer>
				</ul>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
