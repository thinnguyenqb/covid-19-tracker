import React, {useEffect, useState} from "react";
import { getCountries, getReportByCountry }  from './apis'
import CountrySelector from './Components/CountrySelector'
import Highlight from './Components/Highlight'
import Summary from './Components/Summary'

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() => { //nhận 2 tham số
    getCountries().then((res) => { //dùng then để lấy dữ liệu trả về từ api
      setCountries(res.data)
      setSelectedCountryId('vn')
    });
  }, [])//tham số thứ 2 là 1 empty array 

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value)
  }

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      //call api
      getReportByCountry(Slug).then((res) => {
        //xóa đi item cuối cùng trong array res.data
        res.data.pop();
        setReport(res.data)   
      }) 
    }
  },[countries, selectedCountryId])

  return (
    <>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId}/>
      <Highlight report={report}/>
      <Summary report={report} countryId={selectedCountryId}/>
    </>
  );
}

export default App;
