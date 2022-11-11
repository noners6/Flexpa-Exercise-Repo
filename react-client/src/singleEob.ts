export const singleEob = {
  fullUrl:
    "https://fhir.humana.com/sandbox/api/ExplanationOfBenefit/df4e20433ff8accdd1e689a4f5d018c272fe51c53e54d1bdeffb48a2277314f5",
  resource: {
    resourceType: "ExplanationOfBenefit",
    id: "df4e20433ff8accdd1e689a4f5d018c272fe51c53e54d1bdeffb48a2277314f5",
    meta: {
      versionId: "192",
      lastUpdated: "2022-11-10T08:04:12.119+00:00",
      source: "https://fhir.humana.com/documentation/glossary/HumanaDataSource",
      tag: [
        {
          system: "https://www.hl7.org/fhir/patient.html",
          code: "Patient/74532b683658335246434e495a53425462476c5741673d3d",
        },
        {
          system:
            "https://fhir.humana.com/documentation/glossary/lastRefreshedOn",
          code: "2022-11-10T08:04:10.011Z",
        },
      ],
    },
    identifier: [
      {
        use: "usual",
        system: "https://fhir.humana.com/documentation/glossary/claim_id",
        value: "716975276824",
      },
      {
        system: "https://fhir.humana.com/documentation/glossary/source_data_id",
        value: "undefined",
      },
    ],
    status: "active",
    type: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/claim-type",
          code: "pharmacy",
          display: "Pharmacy",
        },
      ],
      text: "Pharmacy",
    },
    use: "claim",
    patient: {
      reference: "Patient/74532b683658335246434e495a53425462476c5741673d3d",
    },
    created: "2020-06-11",
    insurer: {
      display: "Humana",
    },
    provider: {
      identifier: {
        system: "http://hl7.org/fhir/sid/us-npi",
        value: "7653324343",
      },
      display: "Alvena Schaden",
    },
    prescription: {
      identifier: {
        system: "http://hl7.org/fhir/sid/ndc",
        value: "10135036701",
      },
      display: "prochlorperazine maleate",
    },
    facility: {
      display: "52913 Hackett Glens, Jovanymouth ND, 30783",
    },
    outcome: "complete",
    insurance: [
      {
        focal: true,
        coverage: {
          identifier: {
            system:
              "https://fhir.humana.com/documentation/glossary/memberIdBase",
            value: "H40183968",
          },
        },
      },
    ],
    item: [
      {
        sequence: 1,
        productOrService: {
          coding: [
            {
              system: "http://www.nlm.nih.gov/research/umls/rxnorm",
              code: "312635",
              display: "prochlorperazine maleate",
            },
            {
              system: "http://hl7.org/fhir/sid/ndc",
              code: "10135036701",
              display: "prochlorperazine maleate",
            },
          ],
        },
      },
    ],
    total: [
      {
        category: {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
              code: "allowedamount",
            },
          ],
        },
        amount: {
          value: 287.77,
          currency: "USD",
        },
      },
      {
        category: {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
              code: "cobamount",
            },
          ],
        },
        amount: {
          value: 0,
          currency: "USD",
        },
      },
      {
        category: {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
              code: "coinsuranceamount",
            },
          ],
        },
        amount: {
          value: 0,
          currency: "USD",
        },
      },
      {
        category: {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
              code: "copaymentamount",
            },
          ],
        },
        amount: {
          value: 0,
          currency: "USD",
        },
      },
      {
        category: {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
              code: "deductibleamount",
            },
          ],
        },
        amount: {
          value: 0,
          currency: "USD",
        },
      },
      {
        category: {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
              code: "noncoveredamount",
            },
          ],
        },
        amount: {
          value: 806.8,
          currency: "USD",
        },
      },
      {
        category: {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
              code: "patientpayamount",
            },
          ],
        },
        amount: {
          value: 0,
          currency: "USD",
        },
      },
      {
        category: {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
              code: "paymentamount",
            },
          ],
        },
        amount: {
          value: 287.77,
          currency: "USD",
        },
      },
    ],
    payment: {
      type: {
        coding: [
          {
            system:
              "http://hl7.org/fhir/us/carin-bb/ValueSet/C4BBPayerClaimPaymentStatusCode",
            code: "paid",
            display: "paid",
          },
        ],
      },
      date: "2020-06-12",
      amount: {
        value: 287.77,
        currency: "USD",
      },
    },
  },
  search: {
    mode: "match",
  },
};
