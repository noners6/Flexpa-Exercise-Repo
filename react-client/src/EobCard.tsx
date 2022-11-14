import { CardActions, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { ExplanationOfBenefit } from "fhir/r4";
import React from "react";
import "./eobCard.css";
import ButtonPopover from "./PopoverButton";

interface EobProps {
  eob: ExplanationOfBenefit;
}

export const EobCard = ({ eob }: EobProps) => {
  return (
    <Card key={eob.id} className="cardContainer" variant="outlined">
      <CardContent className="cardContentContainer">
        <Typography
          key="firstTypography"
          align="center"
          sx={{ mb: 1.5 }}
          color="black"
        >
          <span className="typeText">Type of Record:</span>{" "}
          <div>{eob?.type?.coding?.[0]?.display}</div>
        </Typography>
        <Typography key="secondTypography" align="left">
          <ul key={eob.id}>
            <li key={eob.use}>
              <span className="typeText">Use:</span> {eob?.use}
            </li>
            <li key={eob.status}>
              <span className="typeText">Status:</span> {eob?.status}
            </li>
            {eob?.insurer?.display && (
              <li key={eob.insurer.display}>
                <span className="typeText">Insurer:</span>{" "}
                {eob?.insurer?.display}
              </li>
            )}
            {eob?.provider.display && (
              <li key={eob.provider.display}>
                <span className="typeText">Provider:</span>{" "}
                {eob?.provider?.display}
              </li>
            )}
            {eob?.facility?.display && (
              <li key={eob?.facility?.display}>
                <span className="typeText">Facility:</span>{" "}
                {eob?.facility?.display}
              </li>
            )}
          </ul>
        </Typography>
      </CardContent>

      <CardActions>
        <ButtonPopover data={eob} />
      </CardActions>
    </Card>
  );
};
