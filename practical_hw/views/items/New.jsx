const React = require('react')
function New(props) {
    return(
        <div>
            <h1>New Item</h1>
            <a href="/items">Go back to index page</a>
            <form action="/items" method="POST">
                name: <input type="text" name="name" />
                price: <input type="text" name="price" />
                <input type="submit" value="Create Item" />
            </form>
        </div>
    )
}

module.exports = New