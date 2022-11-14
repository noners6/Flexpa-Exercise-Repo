import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../react-client/src/assets/EOBColor.svg";
import "./App.css";
import { EobCard } from "./EobCard";
import "./eobCard.css";
import { FlexpaConfig, LinkExchangeResponse } from "./types/flexpa_types";

declare const FlexpaLink: {
  create: (config: FlexpaConfig) => Record<string, unknown>;
  open: () => Record<string, unknown>;
};

function App() {
  // TODO: remove eob in useState, and switch to empty array
  // Then, switch in line
  const [eob, setEoB] = useState([]);

  useEffect(() => {
    FlexpaLink.create({
      publishableKey: "pk_test_Hwwr5Cy-ql3oh3vJ0KE9S4eMXQRrbJPYPpJwQkCmcrg", // Defined in .env
      onSuccess: async (publicToken: string) => {
        let resp;
        try {
          resp = await fetch(`http://localhost:9000/flexpa-access-token`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ publicToken }),
          });
        } catch (err) {
          console.log("err", err);
          return <div>Error!</div>;
        }

        if (!resp) {
          return;
        }

        const body = (await resp.json()) as LinkExchangeResponse;
        const { accessToken, expiresIn } = body;

        const fhirExplanationOfBenefits = await fetch(
          `https://api.flexpa.com/fhir/ExplanationOfBenefit?patient=$PATIENT_ID`,
          {
            method: "GET",
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const fhirExplanationOfBenefitsBody: any =
          await fhirExplanationOfBenefits.json();

        console.log(fhirExplanationOfBenefitsBody, "body");
        console.log(fhirExplanationOfBenefits, "no body");

        setEoB(fhirExplanationOfBenefitsBody.entry || []);
      },
    });
  }, []);

  return (
    <div className="App">
      <Button
        sx={{ marginBottom: 2, marginTop: 2 }}
        variant="contained"
        onClick={() => FlexpaLink.open()}
      >
        Authenticate
      </Button>
      <div className="imageContainer">
        <Logo />
      </div>
      <div className="cardList">
        {eob &&
          eob.map((entry: any) => (
            <EobCard key={entry.resource.id} eob={entry?.resource} />
          ))}
      </div>
    </div>
  );
}

export default App;
