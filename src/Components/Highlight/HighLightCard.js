import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import CountUp from 'react-countup'

const useStyles = makeStyles({
  wrapper: (props) => {
    if (props.type === 'confirmed') return { borderLeft: "5px solid #c9302c", background: "#ff4d4f"};
    if (props.type === 'recovered') return { borderLeft: "5px solid #28a745", background: "#73d13d" };
    else return { borderLeft: "5px solid gray", background: "#bfbfbf"}
  },
  title: {
    fontSize: 18,
    marginBottom: 5
  },
  count: {  
    fontSize: 18,
    fontWeight: 'bold'
  }
})

const HighLightCart = ({ title, count, type }) => {
  const styles = useStyles({ type });
  return (
    <Card className={styles.wrapper}>
      <CardContent>
        <Typography component="p" variant="body2" className={styles.title}>
          { title }
        </Typography>
        <Typography component="span" variant="body2" className={styles.count}>
          <CountUp end={count || 0} duration={2} separator='.'/>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(HighLightCart);
