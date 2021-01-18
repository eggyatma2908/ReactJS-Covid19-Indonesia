import React, { Component } from 'react'
import axios from 'axios'

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            positive: '',
            recovers: '',
            dead: '',
            treated: ''
        }
    }

    total = () => {
        if (this.props.title === 'Total Kasus') {
            return this.state.positive
        } else if (this.props.title === 'Total Sembuh') {
            return this.state.recovers
        } else if (this.props.title === 'Total Meninggal') {
            return this.state.dead
        } else if (this.props.title === 'Total Dirawat') {
            return this.state.treated
        }
    }

    componentDidMount = (() => {
        // Data Total Positive, Recovers, Dead and Treated
        axios.get(`https://api.allorigins.win/raw?url=https://api.kawalcorona.com/indonesia/`)
            .then((res) => {
                this.setState({
                    positive: res.data[0].positif,
                    recovers: res.data[0].sembuh,
                    dead: res.data[0].meninggal,
                    treated: res.data[0].dirawat
                })
            })
            .catch(() => {
                
            })
    })

    render() {
        return (
            <div className="boxcard" style={this.props.bgcolor}>
                <div className="boxincard">
                    <img src={this.props.img} alt="img" style={this.props.style}></img>
                    <div>
                        <p>{this.props.title}</p>
                        <p>{this.total()}</p>
                    </div>
                </div>
            </div>
        )
    }
}
