import React, {useEffect, useState} from "react";
import { getCountries, getReportByCountry }  from './apis'
import CountrySelector from './Components/CountrySelector'
import Highlight from './Components/Highlight'
import Summary from './Components/Summary'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => { //nhận 2 tham số
    getCountries().then((res) => { //dùng then để lấy dữ liệu trả về từ api
      console.log({res});
      setCountries(res.data)
    });
  }, [])//tham số thứ 2 là 1 empty array 

  const handleOnChange = (e) => {
    console.log({e});
    const { Slug } = countries.find(
      (country) => country.ISO2.toLowerCase() === e.target.value
    );
    
    console.log({e, Slug});
    //call api
    getReportByCountry(Slug).then(res => 
      console.log('getReportByCountry', { res })
    )
  }

  return (
    <div>
      <CountrySelector countries={countries} handleOnChange={handleOnChange}/>
      <Highlight />
      <Summary />

    </div>
  );
}

export default App;
