import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'mdrd',
  title: 'MDRD eGFR Calculator',
  description: 'Estimate GFR using the 4-variable MDRD equation.',
  category: 'Renal',
  keywords: ['mdrd', 'egfr', 'kidney'],
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
    const age=num(values.age),scr=num(values.scr),female=values.sex==="female";
 const egfr=175*scr**-1.154*age**-0.203*(female?0.742:1);
 return {primary:{label:"eGFR",value:fixed(egfr,1),unit:"mL/min/1.73 m²"},interpretation:"MDRD estimate; interpret with clinical context."};
  },
  formula: 'eGFR = 175 × Scr^−1.154 × Age^−0.203 × 0.742 if female',
  references: [
  {
    "title": "Levey et al. A more accurate method to estimate GFR from serum creatinine. Ann Intern Med."
  }
]
};
export default calculator;
