const getState = ({ getStore, setStore }) => {
	return {
		store: {
			todo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			todolist: []
		},
		actions: {
			addTodo: todoInput => {
				const store = getStore();

				fetch("https://3000-b56f907a-188b-42a9-83e2-c576c11ea365.ws-us0.gitpod.io/todolist", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						todo: todoInput
					})
				}).then(getDataUpdated => {
					fetch("https://3000-b56f907a-188b-42a9-83e2-c576c11ea365.ws-us0.gitpod.io/todolist")
						.then(response => response.json())
						.then(data => {
							store.todo = data;
							getStore({ store });
						});
				});
			},

			changeColor: (index, color) => {
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.todo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ store });
			}
		}
	};
};

export default getState;
