import { Grid } from "@material-ui/core";
import React, {useEffect, useState} from "react";
import LineChartConfirmed from "../Charts/LineChartConfirmed";
import LineChartRecovered from "../Charts/LineChartRecovered";
import LineChartDeaths from "../Charts/LineChartDeaths";
import { getMapDataByCountryId } from '../../apis';
import HighMaps from "../Charts/HighMaps";


export default function Summary({ report, countryId }) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (countryId) {
      getMapDataByCountryId(countryId)
        .then((res) => {
          setMapData(res);
        })
        .catch((err) => console.log({ err }));
    }
  }, [countryId]);

  return (
    <div style={{marginTop: "10px" }}>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <LineChartConfirmed data={report} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <HighMaps mapData={mapData}/>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <LineChartDeaths data={report} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <LineChartRecovered data={report} />
        </Grid>
      </Grid>
    </div>
  );
}
