import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.characters.map(char => <div className='character-card'> {char.name} </div>)
                }
            </div>
        )
    }
}
