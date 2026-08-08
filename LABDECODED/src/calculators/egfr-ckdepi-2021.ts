import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'egfr-ckdepi-2021',
  title: 'eGFR — CKD-EPI 2021',
  description: 'Estimate GFR using the 2021 race-free CKD-EPI creatinine equation.',
  category: 'Renal',
  keywords: ['egfr', 'ckd', 'kidney', 'creatinine'],
  featured: true,
  inputs: [
  {
    "id": "age",
    "label": "Age",
    "type": "number",
    "unit": "years",
    "required": true,
    "min": 18,
    "max": 120,
    "step": 1
  },
  {
    "id": "sex",
    "label": "Sex",
    "type": "select",
    "required": true,
    "options": [
      {
        "value": "female",
        "label": "Female"
      },
      {
        "value": "male",
        "label": "Male"
      }
    ]
  },
  {
    "id": "scr",
    "label": "Serum creatinine",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0.1,
    "max": 20,
    "step": 0.01
  }
],
  calculate(values) {
    const age=num(values.age), scr=num(values.scr), female=values.sex==="female";
    const k=female?0.7:0.9, a=female?-0.241:-0.302, sexFactor=female?1.012:1;
    const egfr=142*Math.min(scr/k,1)**a*Math.max(scr/k,1)**-1.200*0.9938**age*sexFactor;
    return {primary:{label:"eGFR",value:fixed(egfr,1),unit:"mL/min/1.73 m²"},interpretation:egfr>=90?"G1 range (≥90)":egfr>=60?"G2 range (60–89)":egfr>=45?"G3a range (45–59)":egfr>=30?"G3b range (30–44)":egfr>=15?"G4 range (15–29)":"G5 range (<15)"};
  },
  formula: 'eGFR = 142 × min(Scr/κ,1)^α × max(Scr/κ,1)^−1.200 × 0.9938^Age × 1.012 if female',
  references: [
  {
    "title": "Inker et al. New Creatinine- and Cystatin C\u2013Based Equations to Estimate GFR without Race. NEJM (2021)."
  }
]
};
export default calculator;
