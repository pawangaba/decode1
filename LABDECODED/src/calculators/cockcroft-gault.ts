import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'cockcroft-gault',
  title: 'Creatinine Clearance — Cockcroft-Gault',
  description: 'Estimate creatinine clearance using the Cockcroft-Gault equation.',
  category: 'Renal',
  keywords: ['creatinine clearance', 'cockcroft gault', 'renal'],
  featured: false,
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
    "id": "weight",
    "label": "Weight",
    "type": "number",
    "unit": "kg",
    "required": true,
    "min": 20,
    "max": 300,
    "step": 0.01
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
    const crcl=(140-num(values.age))*num(values.weight)/(72*num(values.scr))*(values.sex==="female"?0.85:1);
 return {primary:{label:"Creatinine clearance",value:fixed(crcl,1),unit:"mL/min"},interpretation:"Cockcroft-Gault estimate; drug-dosing decisions should follow the relevant prescribing guidance."};
  },
  formula: '(140 − age) × weight / (72 × serum creatinine) × 0.85 if female',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
