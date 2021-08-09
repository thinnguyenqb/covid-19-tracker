import React, { useEffect, useState } from 'react';
import Highchart from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ButtonGroup, Button } from '@material-ui/core';

const generateOptions = (data) => {
  const categories = [];

  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Tổng ca nhiễm",
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
    },
    tooltip: { 
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [ 
      {
        name: "Tổng Ca nhiễm",
        data: data.map((item) => item.Confirmed), 
      },
    ],
  };
};


const LineChart = ({data})  => { 
  console.log('LineChart', {data})
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState('all'); //empty string: filter time

  useEffect(() => {
    let customData = [];
    //xu ly thay doi reportType
    switch (reportType) {
      case 'all':
        customData = data;
        break;
      case '30':
        customData = data.slice(data.length - 30); //data.length => 50 => data.slice(20)
        break;
      case '7':
        customData = data.slice(data.length - 7); //data.length => 50 => data.slice(20)
        break;
      default:
        customData = data;
        break;
    }
    setOptions(generateOptions(customData));
  }, [data, reportType]); // khi data thay đổi thì useEffect sẽ được thực thi lại
 
  return (
    <div>
      <ButtonGroup size='small' style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button color={reportType === 'all' ? 'secondary' : ''} onClick={() =>  setReportType('all')}>Tất cả</Button>
        <Button color={reportType === '30' ? 'secondary' : ''} onClick={() =>  setReportType('30')}>30 Ngày</Button>
        <Button color={reportType === '7' ? 'secondary' : ''} onClick={() =>  setReportType('7')}>7 Ngày</Button>

      </ButtonGroup>
      <HighchartsReact
        highcharts={Highchart}
        options={options}
      />
    </div>
  );
}

export default LineChart
