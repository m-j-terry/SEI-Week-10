const React = require('react')

function index(props){
    return(
        <div>'
            <h1>Items Index Page</h1>
            <a href="/items/new">Create a new item here!</a>
            <ul>
                {
                    props.items.map((item) => {
                        return(
                            <li key={item._id}>
                                <a href={`/items/${item._id}`}> {item.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index