import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'corrected-sodium',
  title: 'Corrected Sodium for Hyperglycemia',
  description: 'Estimate sodium corrected for hyperglycemia.',
  category: 'Electrolytes',
  keywords: ['corrected sodium', 'hyperglycemia'],
  featured: false,
  inputs: [
  {
    "id": "sodium",
    "label": "Measured sodium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 80,
    "max": 200,
    "step": 0.01
  },
  {
    "id": "glucose",
    "label": "Glucose",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 50,
    "max": 1000,
    "step": 0.01
  }
],
  calculate(values) {
    const c=num(values.sodium)+1.6*((num(values.glucose)-100)/100);
 return {primary:{label:"Corrected sodium",value:fixed(c,1),unit:"mmol/L"}};
  },
  formula: 'Corrected Na = measured Na + 1.6 × [(glucose − 100)/100]',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
