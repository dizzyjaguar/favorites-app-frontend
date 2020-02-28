import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.characters.map(char => <div className='character-card'>
                     <h1> {char.name} </h1>
                     <p>With eyes of {char.eye_color}</p>
                     </div>)
                }
            </div>
        )
    }
}
