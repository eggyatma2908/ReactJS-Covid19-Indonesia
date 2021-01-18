import React from 'react'
import Header from '../components/module/Header'
import Card from '../components/base/Card'
import Disappointed from '../assets/disappointed.png'
import Grinning from '../assets/grinning.png'
import Sad from '../assets/sad.png'
import Treated from '../assets/treated.png'
import Chart from '../components/base/Chart'
import FlagId from '../assets/flagid.png'
import moment from 'moment'
import DataByProvince from '../components/base/DataByProvince'
import Footer from '../components/module/Footer.js'

export default function Home() {
    return (
        <div>
            <Header img={FlagId} style={{ width: 70, height: 70 }} />
            <div className="container-fluid">
                <div>
                    <h1 className="title">Data Covid 19 Indonesia</h1>
                </div>
                <div className="box">
                    <Card title={"Total Kasus"} img={Disappointed} bgcolor={{ backgroundColor: 'rgba(255, 99, 132, 0.6)' }} style={{ marginBottom: 10, width: 50, height: 50 }} />
                    <Card title={"Total Sembuh"} img={Grinning} bgcolor={{ backgroundColor: 'rgba(54, 162, 235, 0.6)' }} style={{ marginBottom: 10, width: 50, height: 50 }} />
                    <Card title={"Total Meninggal"} img={Sad} bgcolor={{ backgroundColor: 'rgba(255, 206, 86, 0.6)' }} style={{ marginBottom: 10, width: 50, height: 50 }} />
                    <Card title={"Total Dirawat"} img={Treated} bgcolor={{ backgroundColor: 'rgba(54, 235, 93, 0.6)' }} style={{ marginBottom: 10, width: 55, height: 55 }} />
                </div>
                <p className="lastupdate" >Update Terakhir : {moment().format('D MMM YYYY h:mm:ss ') + 'WIB'}</p>
                <div className="boxchart">
                    <p>Data Statistik Corona Virus di Indonesia</p>
                    <Chart />
                </div>
                <div>
                    <DataByProvince />
                </div>
            </div>
            <div>
                <Footer img={FlagId} style={{ width: 70, height: 70 }} />
            </div>
        </div>
    )
}
