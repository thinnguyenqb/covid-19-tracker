import axios from "axios";

export const getCountries = () => 
    axios.get('https://api.covid19api.com/countries');// axios là một promise


export const getReportByCountry = (country) => 
    axios.get(`https://api.covid19api.com/dayone/country/${country}`);

export const getMapDataByCountryId = (countryId) =>
    import(
        `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
    );
