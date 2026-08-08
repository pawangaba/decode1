import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'albumin-anion-gap',
  title: 'Albumin-Corrected Anion Gap',
  description: 'Correct anion gap for hypoalbuminemia.',
  category: 'Electrolytes',
  keywords: ['anion gap', 'albumin', 'acid base'],
  featured: false,
  inputs: [
  {
    "id": "sodium",
    "label": "Sodium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 80,
    "max": 200,
    "step": 0.01
  },
  {
    "id": "chloride",
    "label": "Chloride",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 50,
    "max": 160,
    "step": 0.01
  },
  {
    "id": "bicarbonate",
    "label": "Bicarbonate",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 5,
    "max": 60,
    "step": 0.01
  },
  {
    "id": "albumin",
    "label": "Albumin",
    "type": "number",
    "unit": "g/dL",
    "required": true,
    "min": 1,
    "max": 7,
    "step": 0.01
  }
],
  calculate(values) {
    const ag=num(values.sodium)-num(values.chloride)-num(values.bicarbonate); const c=ag+2.5*(4-num(values.albumin)); return {primary:{label:"Albumin-corrected AG",value:fixed(c,1),unit:"mmol/L"}};
  },
  formula: 'Corrected AG = AG + 2.5 × (4.0 − albumin)',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
