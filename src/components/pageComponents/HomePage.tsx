import { useState } from 'react';
import { Grid } from '@material-ui/core';

const HomePage: React.FC = () => {
  return (
    <>
      <Grid container direction="column" justify="flex-start" alignItems="center">

        <Grid item><p style={{ fontSize: "5rem" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p></Grid>
        <Grid item><p style={{ fontSize: "5rem", fontFamily: "Genshin" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quod quibusdam
        placeat non ullam reprehenderit illo ex, dolorem hic aut provident doloremque velit. Alias tempore, officiis totam nemo consequatur unde
        sequi eaque commodi aspernatur recusandae autem possimus voluptatum, quam repudiandae tenetur repellat minima atque voluptas repellendus
        blanditiis cumque! Itaque officiis sint beatae ipsam vero exercitationem ut, repellendus praesentium maiores asperiores atque saepe illo
        labore impedit fuga et facilis veritatis! Ea, ullam distinctio voluptatem quaerat vitae inventore est pariatur, amet qui nam natus ex.
                Excepturi ea corporis molestiae nesciunt nobis cupiditate rem quod, fuga veritatis deserunt ratione voluptatum incidunt cum. Cumque.</p></Grid>
      </Grid>
    </>
  );
}

export { HomePage };