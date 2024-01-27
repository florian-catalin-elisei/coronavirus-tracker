import { Card, CardContent, Typography, Grid } from "@mui/material";
import CountUp from "react-countup";
import styles from "./Cards.module.css";

const Cards = ({ data }) => {
  const { positive, death, lastModified } = data;

  return (
    <div>
      <Grid container className={styles.Cards}>
        <Grid item className={styles.Card} xs={12} md={3}>
          <Card className={styles.Infected}>
            <CardContent>
              <Typography color="grey" gutterBottom>
                Infected
              </Typography>

              <Typography variant="h6">
                <CountUp end={positive} duration={2.5} separator="," />
              </Typography>

              <Typography color="grey">{new Date(lastModified).toLocaleString()}</Typography>

              <Typography variant="body2">
                The number of confirmed COVID-19 cases in the USA
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item className={styles.Card} xs={12} md={3}>
          <Card className={styles.Deaths}>
            <CardContent>
              <Typography color="grey" gutterBottom>
                Deaths
              </Typography>

              <Typography variant="h6">
                <CountUp end={death} duration={2.5} separator="," />
              </Typography>

              <Typography color="grey">{new Date(lastModified).toLocaleString()}</Typography>
              <Typography variant="body2">The number of deaths from COVID-19 in the USA</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
