function create_item() {
    console.log("creating item...")
    let input = {
        id: Math.floor(Math.random() * 151),
        name: document.querySelector("#item_name").value
    }
    // let input = document.querySelector("#input").value

    // check if there are itmes already in localStorage
    if (localStorage.items) {
        console.log("yes items already there");

        // items is just text, but looks like an array, so convert it to an array
        const items = JSON.parse(localStorage.items) // converts text into array
        items.push(input)

        //save it to the localStorage, but this is an array... we need text
        localStorage.items = JSON.stringify(items) // converts text into array
        render_item(input)
    } else {
        console.log("no, items not here. it is empty");
        const items = []
        items.push(input) // ["a", "b", "c"]
        item_array_as_text = JSON.stringify(items) //converts items into text
        // save the items text in localStorage
        localStorage.items = item_array_as_text
        render_item(input)
    }

}

// ----------------------------

function show_items() {
    if (localStorage.items) {
        // convert the items to an array
        const array_items = JSON.parse(localStorage.items) // text to array
        array_items.forEach(item => render_item(item))
    }
}

show_items()

function delete_item() {
    if (localStorage.items) {
        // convert the items to an array
        const array_items = JSON.parse(localStorage.items) // text to array
        console.log(array_items);
        array_items.forEach(item => localStorage.removeItem(item)); }
    
}

// how to make the page refresh
function render_item(item) {
    let div_item = `
    <div class="item">
      <div>${item.id}</div>
      <div>${item.name}</div>
      <button onclick="delete_item()">delete item</button>
    </div>`
    document.querySelector("#items").insertAdjacentHTML('beforeend', div_item)
}