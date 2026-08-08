import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'meld',
  title: 'MELD Score',
  description: 'Calculate MELD using bilirubin, INR and creatinine.',
  category: 'Liver',
  keywords: ['meld', 'liver'],
  featured: false,
  inputs: [
  {
    "id": "bilirubin",
    "label": "Bilirubin",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0.1,
    "max": 100,
    "step": 0.01
  },
  {
    "id": "inr",
    "label": "INR",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 1,
    "max": 20,
    "step": 0.01
  },
  {
    "id": "creatinine",
    "label": "Creatinine",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0.1,
    "max": 20,
    "step": 0.01
  }
],
  calculate(values) {
    const b=Math.max(1,num(values.bilirubin)),i=Math.max(1,num(values.inr)),c=Math.max(1,num(values.creatinine));
 const score=10*(0.957*Math.log(c)+0.378*Math.log(b)+1.120*Math.log(i)+0.643);
 return {primary:{label:"MELD (classic)",value:Math.round(score)},interpretation:"This is the classic MELD formulation; modern allocation systems may use updated variants."};
  },
  formula: 'Classic MELD = 10 × [0.957 ln(creatinine) + 0.378 ln(bilirubin) + 1.120 ln(INR) + 0.643]',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
