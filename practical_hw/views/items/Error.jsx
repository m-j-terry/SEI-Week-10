const React = require('react')
function Error(props) {
    return(
        <div>
            <h1>Error</h1>
            <h2>The name field must be a string and the price field must be a number.</h2>
            <a href="/items/new">Form resubmission</a>
        </div>
    )
}

module.exports = Error