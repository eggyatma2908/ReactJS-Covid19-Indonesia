import React from 'react'
import Header from '../components/module/Header'
import Footer from '../components/module/Footer.js'
import FlagId from '../assets/flagid.png'

export default function Api() {
    return (
        <div>
            <Header img={FlagId} style={{ width: 70, height: 70 }} />
            <div className="container-fluid">
                <div className="row" id="boxdata">
                    <div className="boxapi">
                        <div className="col-lg-4" id="dataindonesia">
                            <h6>Data Indonesia</h6>
                            <div className="line1"></div>
                            <p className="linkapi">https://api.kawalcorona.com/indonesia</p>
                            <p>Example Response :</p>
                            <pre style={{ backgroundColor: "#d7d7ec" }}>
                                <code>
                                    {`
[
  {
    "name": "Indonesia",
    "positif": "514",
    "sembuh": "29",
    "meninggal": "48"
  }
]

`}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="boxapi">
                        <div className="col-lg-4" id="databyprovince">
                            <h6>Data Indonesia Berdasarkan Provinsi</h6>
                            <div className="line1"></div>
                            <p className="linkapi">https://api.kawalcorona.com/indonesia/provinsi/</p>
                            <p>Example Response :</p>
                            <pre style={{ backgroundColor: "#d7d7ec" }}>
                                <code>
                                    {`                               
[
  {
    "attributes": {
    "OBJECTID": 59,
    "Country_Region": "China",
    "Last_Update": 1584097775000,
    "Lat": 30.5928,
    "Long_": 114.3055,
    "Confirmed": 81346,
    "Deaths": 3265,
    "Recovered": 72355,
    "Active": 5726
    }
  }
]	

`}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="boxapi">
                        <div className="col-lg-4" id="dataindonesiaallstatus">
                            <h6>Data Indonesia Berdasarkan Semua Status</h6>
                            <div className="line1"></div>
                            <p className="linkapi">https://api.covid19api.com/country/indonesia?from=2020-12-01T00:00:00Z&to=2021-01-01T00:00:00Z</p>
                            <p>Example Response :</p>
                            <pre style={{ backgroundColor: "#d7d7ec" }}>
                                <code>
                                    {`
[
  {
    "ID":"90523aee-92ca-42e2-ba73-00aee21ff21b",
    "Country":"Indonesia",
    "CountryCode":"ID",
    "Province":"",
    "City":"",
    "CityCode":"",
    "Lat":"-0.79",
    "Lon":"113.92",
    "Confirmed":543975,
    "Deaths":17081,
    "Recovered":454879,
    "Active":72015,
    "Date":"2020-12-01T00:00:00Z"
  }
]

`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer img={FlagId} style={{ width: 70, height: 70 }} />
            </div>
        </div>
    )
}
