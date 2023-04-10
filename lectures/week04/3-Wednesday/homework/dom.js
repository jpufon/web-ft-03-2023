const createNodeWClass = (node, className) => {

    let newNode = document.createElement(node)

    newNode.setAttribute('class', className)

    return newNode;
}

let StarterDiv = createNodeWClass("div",  "container")
let startNav = createNodeWClass("nav",  "navbar navbar-expand-lg navbar-light bg-primary")
startNav.appendChild(StarterDiv)