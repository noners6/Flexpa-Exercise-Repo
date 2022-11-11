import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ExplanationOfBenefit } from "fhir/r4";
import "./eobCard.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface EobProps {
  eob: ExplanationOfBenefit;
}

export const EobCard = ({ eob }: EobProps) => {
  console.log(eob?.type?.coding?.[0].display, "eob");
  return (
    <Card className="gridContainer" variant="outlined">
      <CardContent className="cardContentContainer">
        <Typography variant="h5" component="div"></Typography>
        <Typography
          align="center"
          marginTop="50px"
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          <span className="typeText">Type of Record:</span>{" "}
          <div>{eob?.type?.coding?.[0]?.display}</div>
        </Typography>
        <Typography align="left">
          <ul>
            <li>
              <span className="typeText">Use:</span> {eob?.use}
            </li>
            <li>
              <span className="typeText">Status:</span> {eob?.status}
            </li>
            <li>
              <span className="typeText">Insurer:</span> {eob?.insurer?.display}
            </li>
            <li>
              <span className="typeText">Provider:</span>{" "}
              {eob?.provider?.display}
            </li>
            {eob?.facility?.display && (
              <li>
                <span className="typeText">Facility:</span>{" "}
                {eob?.facility?.display}
              </li>
            )}
          </ul>
        </Typography>
      </CardContent>
      <Box textAlign={"center"}>
        <CardActions>
          <Button size="large">Go to Full View</Button>
        </CardActions>
      </Box>
    </Card>
  );
};
