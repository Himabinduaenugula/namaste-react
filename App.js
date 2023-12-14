//const heading = React.createElement("h1",{id:"heading"}, "Hello World from React!");

const parent= React.createElement("div", {id:"parent"},
[React.createElement("div",{id:"child1"},"Child1"),
React.createElement("h1",{id:"child2"},"child2"),
]),

);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);