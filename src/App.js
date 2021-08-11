import React, {useEffect, useState} from "react";
import { getCountries, getReportByCountry }  from './apis'
import CountrySelector from './Components/CountrySelector'
import Highlight from './Components/Highlight'
import Summary from './Components/Summary'
import { sortBy } from 'lodash';
import { Typography, Container } from "@material-ui/core";
import '@fontsource/roboto';
import moment from 'moment';
import 'moment/locale/vi';

moment.locale('vi');

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() => { //nhận 2 tham số
    getCountries().then((res) => { //dùng then để lấy dữ liệu trả về từ api

      const countries = sortBy(res.data, 'Country');

      setCountries(countries)
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
    <Container style={{marginTop: "20px"}}>
      <Typography variant="h2" component="h2">
        Summary Covid-19
      </Typography>
      <Typography>{moment().format('LLL')}</Typography>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId}/>
      <Highlight report={report}/>
      <Summary report={report} countryId={selectedCountryId}/>
    </Container>
  );
}

export default App;
