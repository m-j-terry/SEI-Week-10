const React = require('react')
function Edit(props) {
    const {name, price, _id}=props.item
    return(
        <div>
            <h1>Edit {name}</h1>
                <a href="/items">Go back to index page</a>
                <form action={`/items/${_id}?_method=PUT`} method="POST">
                    name: <input type="text" name="name" /><br />
                    price: <input type="text" name="price" /><br />
                    <input type="submit" value="Update Item"/>
                </form>
        </div>
    )
}

module.exports = Edit