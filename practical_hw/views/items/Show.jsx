const React = require('react')

function Show(props){
    return(
        <div>
            <h1>{props.item.name}</h1>
            <a href='/items'>Go back to Index Page</a>
            <p>
                The {props.item.name} cost ${props.item.price}. 
            </p>
            <form action={`/items/${props.item._id}?_method=DELETE`} method="POST">
            <input type="submit" value={`Delete this ${props.item.name}`} />
            </form>
            <div>
                <a href={`/items/${props.item._id}/edit`}><button>{`Edit this ${props.item.name}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show