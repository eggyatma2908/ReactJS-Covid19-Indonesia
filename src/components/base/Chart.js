import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'
import moment from 'moment'

export default class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            confirmed: '',
            deaths: '',
            recovered: '',
            actived: '',
            dates: ''
        }
    }

    setChartData() {
        const data = {
            labels: this.state.dates,
            datasets: [
                {
                    label: 'Positif',
                    data: this.state.confirmed,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)'
                },
                {
                    label: 'Meninggal',
                    data: this.state.deaths,
                    backgroundColor: 'rgba(255, 206, 86, 0.6)' 
                },
                {
                    label: 'Sembuh',
                    data: this.state.recovered,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)'
                },
                {
                    label: 'Dirawat',
                    data: this.state.actived,
                    backgroundColor: 'rgba(54, 235, 93, 0.6)'
                }
            ]
        }
        return data
    }

    componentDidMount = (() => {
        // Oldest to Newest Data
        axios.get(`https://api.covid19api.com/country/indonesia?from=2020-12-01T00:00:00Z&to=2021-01-01T00:00:00Z`)
            .then((res) => {
                this.setState({
                    confirmed: res.data.map(item => {
                        const confirm = item.Confirmed
                        return confirm
                    }),
                    deaths: res.data.map(item => {
                        const death = item.Deaths
                        return death
                    }),
                    recovered: res.data.map(item => {
                        const recover = item.Recovered
                        return recover
                    }),
                    actived: res.data.map(item => {
                        const active = item.Active
                        return active
                    }),
                    dates: res.data.map(item => {
                        const date = moment(item.Date).format('D MMM YYYY')
                        return date
                    })
                })
            })
            .catch(() => {

            })
    })

    render() {
        return (
            <div>
                <Bar
                    data={this.setChartData()}
                    width={400}
                    height={400}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}
