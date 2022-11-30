import styles from "./aboutPageComponent.module.scss";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function AboutPageComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography style={{ maxWidth: "600px" }} sx={{ marginTop: 3 }}>
        PinkRent started in 2022 as a small indie team of developers looking to
        lower the basic living costs in the city of Gothenburg, Sweden. It's a
        small renting ecosystem in which people can rent out things for free or
        for a cost. The goal is to make sure more people can access more stuff
        with less boundaries.
        <br />
        <br />
        So PinkRent was born, and so began our adventure. But along our coding
        journey the faced many challenges, interpersonal, technical and
        metaphysical ones. Challenges no one would have anticpiated at the start
        of a adventures such as theirs.
        <br />
        <br />
        But this little team of developer refused to give up, they coded day,
        and night, to ensure the delivery of their product and a passing grade
        in their course. Something only few can dream of in FED21G.
        <br />
        <br />
        The final product is the fantastic website you are visiting right now.
        PinkRent was created from blood, energydrinks and tears. We hope you
        enjoy your visit.
      </Typography>
    </Box>
  );
}

export default AboutPageComponent;
