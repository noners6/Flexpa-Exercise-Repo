export const EoB = [
  {
    fullUrl:
      "https://fhir.humana.com/sandbox/api/ExplanationOfBenefit/df4e20433ff8accdd1e689a4f5d018c272fe51c53e54d1bdeffb48a2277314f5",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "df4e20433ff8accdd1e689a4f5d018c272fe51c53e54d1bdeffb48a2277314f5",
      meta: {
        versionId: "192",
        lastUpdated: "2022-11-10T08:04:12.119+00:00",
        source:
          "https://fhir.humana.com/documentation/glossary/HumanaDataSource",
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
          system:
            "https://fhir.humana.com/documentation/glossary/source_data_id",
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
  },
  {
    fullUrl:
      "https://fhir.humana.com/sandbox/api/ExplanationOfBenefit/d2a57020306146cc451f2a25d93c5c9403757eae79fb069e2ac6f1bf6edc026c",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "d2a57020306146cc451f2a25d93c5c9403757eae79fb069e2ac6f1bf6edc026c",
      meta: {
        versionId: "192",
        lastUpdated: "2022-11-10T08:04:12.279+00:00",
        source:
          "https://fhir.humana.com/documentation/glossary/HumanaDataSource",
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
          value: "880668466212",
        },
        {
          system:
            "https://fhir.humana.com/documentation/glossary/source_data_id",
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
          value: "6162173957",
        },
        display: "Shayna Kuphal",
      },
      prescription: {
        identifier: {
          system: "http://hl7.org/fhir/sid/ndc",
          value: "48818000101",
        },
        display: "Folotyn",
      },
      facility: {
        display: "9441 Wilber Circles, Spinkaville FL, 98363",
      },
      outcome: "complete",
      insurance: [
        {
          focal: true,
          coverage: {
            identifier: {
              system:
                "https://fhir.humana.com/documentation/glossary/memberIdBase",
              value: "H49353082",
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
                code: "1796421",
                display: "Folotyn",
              },
              {
                system: "http://hl7.org/fhir/sid/ndc",
                code: "48818000101",
                display: "Folotyn",
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
            value: 1221.93,
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
            value: 244.39,
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
            value: 977.54,
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
            value: 806.95,
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
            value: 1221.93,
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
            value: 0,
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
          value: 0,
          currency: "USD",
        },
      },
    },
    search: {
      mode: "match",
    },
  },
  {
    fullUrl:
      "https://fhir.humana.com/sandbox/api/ExplanationOfBenefit/220b9c7005786ab01754579dc54915df55fe04a84121987d73bb67bf4b9c3e82",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "220b9c7005786ab01754579dc54915df55fe04a84121987d73bb67bf4b9c3e82",
      meta: {
        versionId: "192",
        lastUpdated: "2022-11-10T08:04:12.445+00:00",
        source:
          "https://fhir.humana.com/documentation/glossary/HumanaDataSource",
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
          value: "531330789905",
        },
        {
          system:
            "https://fhir.humana.com/documentation/glossary/source_data_id",
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
          value: "2979797951",
        },
        display: "Aletha Anderson",
      },
      prescription: {
        identifier: {
          system: "http://hl7.org/fhir/sid/ndc",
          value: "10135063001",
        },
        display: "acebutolol",
      },
      facility: {
        display: "39573 Alysa Plains, Thielside SD, 64350",
      },
      outcome: "queued",
      insurance: [
        {
          focal: true,
          coverage: {
            identifier: {
              system:
                "https://fhir.humana.com/documentation/glossary/memberIdBase",
              value: "H50516401",
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
                code: "998689",
                display: "acebutolol",
              },
              {
                system: "http://hl7.org/fhir/sid/ndc",
                code: "10135063001",
                display: "acebutolol",
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
            value: 50.68,
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
            value: 7.25,
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
            value: 50.68,
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
              code: "denied",
              display: "denied",
            },
          ],
        },
      },
    },
    search: {
      mode: "match",
    },
  },
  {
    fullUrl:
      "https://fhir.humana.com/sandbox/api/ExplanationOfBenefit/b72e4c43ad59a8182676e9e24ab6f29cb80636624b956af89f0c78609d152a78",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "b72e4c43ad59a8182676e9e24ab6f29cb80636624b956af89f0c78609d152a78",
      meta: {
        versionId: "185",
        lastUpdated: "2022-11-10T08:04:11.303+00:00",
        source:
          "https://fhir.humana.com/documentation/glossary/HumanaDataSource",
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
          value: "12188609-52",
        },
        {
          system:
            "https://fhir.humana.com/documentation/glossary/source_data_id",
          value: "undefined",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "vision",
            display: "Vision",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "Patient/74532b683658335246434e495a53425462476c5741673d3d",
      },
      billablePeriod: {
        start: "2017-06-08",
        end: "2017-06-08",
      },
      created: "2017-06-08",
      insurer: {
        display: "Humana",
      },
      provider: {
        identifier: {
          system: "http://hl7.org/fhir/sid/us-npi",
          value: "1134198609",
        },
        display: "DR. JULIAN GABBARD, M.D.",
      },
      outcome: "complete",
      diagnosis: [
        {
          sequence: 1,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "M66146",
                display: "Rupture of synovium, unspecified finger(s)",
              },
            ],
          },
        },
        {
          sequence: 2,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "S82036C",
                display:
                  "Nondisplaced transverse fracture of unspecified patella, initial encounter for open fracture type IIIA, IIIB, or IIIC",
              },
            ],
          },
        },
        {
          sequence: 3,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "S72335C",
                display:
                  "Nondisplaced oblique fracture of shaft of left femur, initial encounter for open fracture type IIIA, IIIB, or IIIC",
              },
            ],
          },
        },
        {
          sequence: 4,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "M10359",
                display: "Gout due to renal impairment, unspecified hip",
              },
            ],
          },
        },
        {
          sequence: 5,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "S36260S",
                display: "Major laceration of head of pancreas, sequela",
              },
            ],
          },
        },
        {
          sequence: 6,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "S15319S",
                display:
                  "Minor laceration of unspecified internal jugular vein, sequela",
              },
            ],
          },
        },
        {
          sequence: 7,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "T543X1D",
                display:
                  "Toxic effect of corrosive alkalis and alkali-like substances, accidental (unintentional), subsequent encounter",
              },
            ],
          },
        },
        {
          sequence: 8,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "V441XXD",
                display:
                  "Car passenger injured in collision with heavy transport vehicle or bus in nontraffic accident, subsequent encounter",
              },
            ],
          },
        },
      ],
      procedure: [
        {
          sequence: 1,
          date: "2021-03-25",
          procedureReference: {
            reference:
              "Procedure/6f8067ca95bf7e0a313bc8bbc30d431f8bfc327a6afab500d19f0ffd9d8adab9",
            display: "Polarization, any lens material, per lens",
          },
        },
        {
          sequence: 2,
          date: "2019-09-24",
          procedureReference: {
            reference:
              "Procedure/cca1728d22719575ae455282c8918ce0b5b923c72b6725f7d97f1a93628e1512",
            display:
              "Spherocylinder, bifocal, plus or minus 4.25 to plus or minus 7.00d sphere, 2.12 to 4.00d cylinder, per lens",
          },
        },
        {
          sequence: 3,
          date: "2018-05-11",
          procedureReference: {
            reference:
              "Procedure/b8b8ce6291af23790099a32cc7ff45cd9908b7ee001cefaac80fda68c35126b0",
            display:
              "Lens, index 1.54 to 1.65 plastic or 1.60 to 1.79 glass, excludes polycarbonate, per lens",
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: {
            identifier: {
              system:
                "https://fhir.humana.com/documentation/glossary/memberIdBase",
            },
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
                code: "paymentamount",
                display: "payment amount",
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
                code: "patientpayamount",
                display: "patient pay amount",
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
                code: "submittedamount",
                display: "submitted amount",
              },
            ],
          },
          amount: {
            value: 77.34,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                system:
                  "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
                code: "allowedamount",
                display: "allowed amount",
              },
            ],
          },
          amount: {
            value: 37.66,
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
                display: "deductible amount",
              },
            ],
          },
          amount: {
            value: 30.13,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                system:
                  "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
                code: "copayamount",
                display: "copay amount",
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
                display: "coinsurance amount",
              },
            ],
          },
          amount: {
            value: 7.53,
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
              display: "Paid",
            },
          ],
        },
        date: "2017-06-08",
        amount: {
          value: 0,
          currency: "USD",
        },
      },
    },
    search: {
      mode: "match",
    },
  },
  {
    fullUrl:
      "https://fhir.humana.com/sandbox/api/ExplanationOfBenefit/fda1536a8fb2ea085a096aa54e36d4f22bf3ca2ecec42f896c839e2c9639fd99",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "fda1536a8fb2ea085a096aa54e36d4f22bf3ca2ecec42f896c839e2c9639fd99",
      meta: {
        versionId: "185",
        lastUpdated: "2022-11-10T08:04:11.337+00:00",
        source:
          "https://fhir.humana.com/documentation/glossary/HumanaDataSource",
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
          value: "63201548-59",
        },
        {
          system:
            "https://fhir.humana.com/documentation/glossary/source_data_id",
          value: "undefined",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "professional",
            display: "Professional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "Patient/74532b683658335246434e495a53425462476c5741673d3d",
      },
      billablePeriod: {
        start: "2020-04-22",
        end: "2020-04-22",
      },
      created: "2020-04-22",
      insurer: {
        display: "Humana",
      },
      provider: {
        identifier: {
          system: "http://hl7.org/fhir/sid/us-npi",
          value: "1245204619",
        },
        display: "DR. ROY GIVENS, M.D.",
      },
      outcome: "complete",
      diagnosis: [
        {
          sequence: 1,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "S21229D",
                display:
                  "Laceration with foreign body of unspecified back wall of thorax without penetration into thoracic cavity, subsequent encounter",
              },
            ],
          },
        },
        {
          sequence: 2,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "M84373D",
                display:
                  "Stress fracture, unspecified ankle, subsequent encounter for fracture with routine healing",
              },
            ],
          },
        },
        {
          sequence: 3,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "S066X3S",
                display:
                  "Traumatic subarachnoid hemorrhage with loss of consciousness of 1 hour to 5 hours 59 minutes, sequela",
              },
            ],
          },
        },
      ],
      procedure: [
        {
          sequence: 1,
          date: "2020-02-13",
          procedureReference: {
            reference:
              "Procedure/416e521d85e28223ce5154ef055a64ed9335aa3895ed332556ba4427596145f9",
            display:
              "Fibrin(ogen) degradation (split) products (FDP) (FSP); agglutination slide, semiquantitative",
          },
        },
        {
          sequence: 2,
          date: "2020-09-17",
          procedureReference: {
            reference:
              "Procedure/8afc63693e111c8d30c88f949666b0e2c1c0105f7e1d982287a542b8eba1b962",
            display: "OSTOMY SKIN BARRIER PECTIN BASED PASTE OZ",
          },
        },
        {
          sequence: 3,
          date: "2019-10-25",
          procedureReference: {
            reference:
              "Procedure/3f2d80b49bbe83f0ebe2577fe29fba4941a617384c1f79b9aa419c19910dec80",
            display: "Excision of lacrimal gland tumor; frontal approach",
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: {
            identifier: {
              system:
                "https://fhir.humana.com/documentation/glossary/memberIdBase",
            },
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
                code: "paymentamount",
                display: "payment amount",
              },
            ],
          },
          amount: {
            value: 74.51,
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
                display: "patient pay amount",
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
                code: "submittedamount",
                display: "submitted amount",
              },
            ],
          },
          amount: {
            value: 217.5,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                system:
                  "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
                code: "allowedamount",
                display: "allowed amount",
              },
            ],
          },
          amount: {
            value: 74.51,
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
                display: "deductible amount",
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
                code: "copayamount",
                display: "copay amount",
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
                display: "coinsurance amount",
              },
            ],
          },
          amount: {
            value: 0,
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
              display: "Paid",
            },
          ],
        },
        date: "2020-04-22",
        amount: {
          value: 74.51,
          currency: "USD",
        },
      },
    },
    search: {
      mode: "match",
    },
  },
  {
    fullUrl:
      "https://fhir.humana.com/sandbox/api/ExplanationOfBenefit/e9d75bcc952b45aaaa3e4bf5daad42d772ac41bce7fa3f6a43403d8585dca93a",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "e9d75bcc952b45aaaa3e4bf5daad42d772ac41bce7fa3f6a43403d8585dca93a",
      meta: {
        versionId: "185",
        lastUpdated: "2022-11-10T08:04:11.628+00:00",
        source:
          "https://fhir.humana.com/documentation/glossary/HumanaDataSource",
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
          value: "7462981-12",
        },
        {
          system:
            "https://fhir.humana.com/documentation/glossary/source_data_id",
          value: "undefined",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "institutional",
            display: "Institutional",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "Patient/74532b683658335246434e495a53425462476c5741673d3d",
      },
      billablePeriod: {
        start: "2017-08-15",
        end: "2017-08-15",
      },
      created: "2017-08-15",
      insurer: {
        display: "Humana",
      },
      provider: {
        identifier: {
          system: "http://hl7.org/fhir/sid/us-npi",
          value: "1134198609",
        },
        display: "DR. JULIAN GABBARD, M.D.",
      },
      outcome: "complete",
      diagnosis: [
        {
          sequence: 1,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "M12072",
                display:
                  "Chronic postrheumatic arthropathy [Jaccoud], left ankle and foot",
              },
            ],
          },
        },
        {
          sequence: 2,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "S93132A",
                display:
                  "Subluxation of interphalangeal joint of left great toe, initial encounter",
              },
            ],
          },
        },
        {
          sequence: 3,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "S31119D",
                display:
                  "Laceration without foreign body of abdominal wall, unspecified quadrant without penetration into peritoneal cavity, subsequent encounter",
              },
            ],
          },
        },
        {
          sequence: 4,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "T23109D",
                display:
                  "Burn of first degree of unspecified hand, unspecified site, subsequent encounter",
              },
            ],
          },
        },
        {
          sequence: 5,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "Y248XXS",
                display:
                  "Other firearm discharge, undetermined intent, sequela",
              },
            ],
          },
        },
        {
          sequence: 6,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "B409",
                display: "Blastomycosis, unspecified",
              },
            ],
          },
        },
        {
          sequence: 7,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "M90549",
                display:
                  "Osteonecrosis in diseases classified elsewhere, unspecified hand",
              },
            ],
          },
        },
        {
          sequence: 8,
          diagnosisCodeableConcept: {
            coding: [
              {
                system: "http://hl7.org/fhir/ValueSet/icd-10",
                code: "S37512D",
                display:
                  "Primary blast injury of fallopian tube, bilateral, subsequent encounter",
              },
            ],
          },
        },
      ],
      procedure: [
        {
          sequence: 1,
          date: "2019-06-06",
          procedureReference: {
            reference:
              "Procedure/d31c9c270c8ec7aab17f3de9dd07a851eb8ca95b1ae8ee6aebad0bddc8d69780",
            display: "Thoracoscopy, surgical; with parietal pleurectomy",
          },
        },
        {
          sequence: 2,
          date: "2021-02-20",
          procedureReference: {
            reference:
              "Procedure/c516fce63a73c26bd297eb3c4cf1b37af51921798a186103f05123af366a2469",
            display:
              "Addition to upper extremity prosthesis, below elbow/above elbow, custom fabricated from existing mold or prefabricated, socket insert, silicone gel, elastomeric or equal, for use with locking mechanism",
          },
        },
        {
          sequence: 3,
          date: "2020-11-02",
          procedureReference: {
            reference:
              "Procedure/f056bba9b5d5e433799af3b2ac8b3010fcf1187b443dd82c93dc121175e6c7d1",
            display:
              "Partial esophagectomy, distal two-thirds, with thoracotomy only, with or without proximal gastrectomy, with thoracic esophagogastrostomy, with or without pyloroplasty",
          },
        },
        {
          sequence: 4,
          date: "2017-11-05",
          procedureReference: {
            reference:
              "Procedure/06b5be780dc482362bc9d82fe3d8d16f403522407ee7ab77684a60e3148d4ec5",
            display:
              "Percutaneous transluminal revascularization of chronic total occlusion, coronary artery, coronary artery branch, or coronary artery bypass graft, any combination of drug-eluting intracoronary stent, atherectomy and angioplasty; each additional coronary artery, coronary artery branch, or bypass graft (list separately in addition to code for primary procedure)",
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: {
            identifier: {
              system:
                "https://fhir.humana.com/documentation/glossary/memberIdBase",
            },
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
                code: "paymentamount",
                display: "payment amount",
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
                code: "patientpayamount",
                display: "patient pay amount",
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
                code: "submittedamount",
                display: "submitted amount",
              },
            ],
          },
          amount: {
            value: 70.17,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                system:
                  "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
                code: "allowedamount",
                display: "allowed amount",
              },
            ],
          },
          amount: {
            value: 12.6,
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
                display: "deductible amount",
              },
            ],
          },
          amount: {
            value: 10.08,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                system:
                  "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
                code: "copayamount",
                display: "copay amount",
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
                display: "coinsurance amount",
              },
            ],
          },
          amount: {
            value: 2.52,
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
              display: "Paid",
            },
          ],
        },
        date: "2017-08-15",
        amount: {
          value: 0,
          currency: "USD",
        },
      },
    },
    search: {
      mode: "match",
    },
  },
  {
    fullUrl:
      "https://fhir.humana.com/sandbox/api/ExplanationOfBenefit/17dff06902221121dc5c0e5dbc662969facb4b3f23c1bd7644e689b4f280834d",
    resource: {
      resourceType: "ExplanationOfBenefit",
      id: "17dff06902221121dc5c0e5dbc662969facb4b3f23c1bd7644e689b4f280834d",
      meta: {
        versionId: "183",
        lastUpdated: "2022-11-10T08:04:11.969+00:00",
        source:
          "https://fhir.humana.com/documentation/glossary/HumanaDataSource",
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
          value: "202003060477161",
        },
        {
          system:
            "https://fhir.humana.com/documentation/glossary/source_data_id",
          value: "undefined",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-type",
            code: "oral",
            display: "Oral",
          },
        ],
      },
      use: "claim",
      patient: {
        reference: "Patient/74532b683658335246434e495a53425462476c5741673d3d",
      },
      billablePeriod: {
        start: "2020-03-06",
        end: "2020-03-06",
      },
      created: "2020-03-06",
      insurer: {
        display: "Humana",
      },
      provider: {
        identifier: {
          system: "http://hl7.org/fhir/sid/us-npi",
          value: "1124330337",
        },
        display: "3RD STREET FAMILY DENTAL",
      },
      outcome: "complete",
      procedure: [
        {
          sequence: 1,
          date: "2017-09-17",
          procedureReference: {
            reference:
              "Procedure/3d5e2ff338a86887761d6499b5f892be45c9a7eac3d73e01bf87fb1aba6a0dd4",
            display: "PERIODIC ORAL EVALUATION - ESTABLISHED PATIENT",
          },
        },
      ],
      insurance: [
        {
          focal: true,
          coverage: {
            identifier: {
              system:
                "https://fhir.humana.com/documentation/glossary/memberIdBase",
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
                system: "http://hl7.org/fhir/us/sid/cdt",
                code: "D0120",
                display: "PERIODIC ORAL EVALUATION - ESTABLISHED PATIENT",
              },
            ],
            text: "PERIODIC ORAL EVALUATION - ESTABLISHED PATIENT",
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
                code: "paymentamount",
                display: "payment amount",
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
                code: "patientpayamount",
                display: "patient pay amount",
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
                code: "submittedamount",
                display: "submitted amount",
              },
            ],
          },
          amount: {
            value: 191.66,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                system:
                  "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
                code: "allowedamount",
                display: "allowed amount",
              },
            ],
          },
          amount: {
            value: 126.11,
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
                display: "deductible amount",
              },
            ],
          },
          amount: {
            value: 100.89,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                system:
                  "http://hl7.org/fhir/us/carin/CodeSystem/carin-bb-adjudicationcategory",
                code: "copayamount",
                display: "copay amount",
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
                display: "coinsurance amount",
              },
            ],
          },
          amount: {
            value: 25.22,
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
              display: "Paid",
            },
          ],
        },
        date: "2019-11-14",
        amount: {
          value: 0,
          currency: "USD",
        },
      },
    },
    search: {
      mode: "match",
    },
  },
];
