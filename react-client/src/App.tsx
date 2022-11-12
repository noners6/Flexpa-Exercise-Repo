import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import { EoB } from "./eob";
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
  const [eob, setEoB] = useState(EoB);

  useEffect(() => {
    FlexpaLink.create({
      publishableKey: "pk_test_FCcXpCkSRvk5G2yKt8tH5fVFyHNk9vKa3k6ry9-X9Fk", // Defined in .env
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
          return <div>Error!</div>;
        }

        if (!resp) {
          return;
        }

        const body = (await resp.json()) as LinkExchangeResponse;
        const { accessToken, expiresIn } = body;

        const fhirCoverageResp = await fetch(
          `https://api.flexpa.com/fhir/ExplanationOfBenefit?patient=$PATIENT_ID`,
          {
            method: "GET",
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const fhirCoverageBody: any = await fhirCoverageResp.json();
        //setEoB(fhirCoverageBody?.entry || []);
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