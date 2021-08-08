import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";
import React, {useEffect, useState} from "react";

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
    colors: ["#F3585B"], //color line chart
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
    },
    tooltip: { //customize lại nội dung hiển thị trên đường chart
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
    series: [ //data truyền vào để hiển thị trên lineChart  
      {
        name: "Tổng Ca nhiễm",
        data: data.map((item) => item.Confirmed), //data được lấy vào dựa vào parameter (tham số)
      },
    ],
  };
};


const LineChart = ({data})  => { //khi data thay đổi thì cần cập nhật lại generateOptions
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions(generateOptions(data));
  }, [data]); // khi data thay đổi thì useEffect sẽ được thực thi lại
 
  return (
    <div>
      <HighchartsReact 
        highchart={Highchart} 
        options={options} // xét giá trị state này vào option để highchart có thể hiển thị
      />
    </div>
  );
}

export default LineChart
