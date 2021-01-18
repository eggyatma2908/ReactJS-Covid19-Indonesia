import React, { Component } from 'react'
import axios from 'axios'

export default class DataByProvince extends Component {
    constructor(props) {
        super(props)
        this.state = {
            provinces: [],
            positives: [],
            recovers: [],
            deaths: [],
        }
    }

    componentDidMount = (() => {
        // Data By Province
        axios.get(`https://api.allorigins.win/raw?url=https://api.kawalcorona.com/indonesia/provinsi/`)
            .then((res) => {
                this.setState({
                    provinces: res.data.map(item => {
                        const province = item.attributes.Provinsi
                        return province
                    }),
                    positives: res.data.map(item => {
                        const positive = item.attributes.Kasus_Posi
                        return positive
                    }),
                    recovers: res.data.map(item => {
                        const recover = item.attributes.Kasus_Semb
                        return recover
                    }),
                    deaths: res.data.map(item => {
                        const death = item.attributes.Kasus_Meni
                        return death
                    })
                })
            })
            .catch(() => {

            })
    })

    render() {
        return (
            <div>
                <p style={{ marginTop: 40 }} className="datastatistic">Data Kasus Covid 19 di Indonesia berdasarkan Provinsi</p>
                <div className="boxdatabyprovince">
                    <table className="table" id="header-fixed">
                        <thead className="thead-dark" style={{ position: 'sticky' }}>
                            <tr>
                                <th className="border" scope="col">No.</th>
                                <th className="border" scope="col">Provinsi</th>
                                <th className="border" scope="col">Positif</th>
                                <th className="border" scope="col">Sembuh</th>
                                <th className="border" scope="col">Meninggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-light">
                                <th className="borderno" scope="row">
                                    {
                                        this.state.provinces.map((item, index) => {
                                            return <li>{index + 1}</li>
                                        })
                                    }
                                </th>
                                <td className="border">
                                    {this.state.provinces.map(item => {
                                        return <li style={{ listStyle: 'none', width: 240 }}>{item}</li>
                                    })}
                                </td>
                                <td className="border">
                                    {this.state.positives.map(item => {
                                        return <li style={{ listStyle: 'none' }}>{item}</li>
                                    })}
                                </td>
                                <td className="border">
                                    {this.state.recovers.map(item => {
                                        return <li style={{ listStyle: 'none' }}>{item}</li>
                                    })}
                                </td>
                                <td className="border">
                                    {this.state.deaths.map(item => {
                                        return <li style={{ listStyle: 'none' }}>{item}</li>
                                    })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
