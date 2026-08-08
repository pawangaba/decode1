import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'fena',
  title: 'Fractional Excretion of Sodium (FENa)',
  description: 'Estimate fractional sodium excretion.',
  category: 'Renal',
  keywords: ['fena', 'sodium', 'kidney'],
  featured: false,
  inputs: [
  {
    "id": "urineNa",
    "label": "Urine sodium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 0,
    "max": 500,
    "step": 0.01
  },
  {
    "id": "plasmaNa",
    "label": "Plasma sodium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 80,
    "max": 200,
    "step": 0.01
  },
  {
    "id": "urineCr",
    "label": "Urine creatinine",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0.1,
    "max": 1000,
    "step": 0.01
  },
  {
    "id": "plasmaCr",
    "label": "Plasma creatinine",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0.1,
    "max": 20,
    "step": 0.01
  }
],
  calculate(values) {
    const x=(num(values.urineNa)*num(values.plasmaCr))/(num(values.plasmaNa)*num(values.urineCr))*100;
 return {primary:{label:"FENa",value:fixed(x,2),unit:"%"},interpretation:"FENa is a clinical aid and may be misleading with diuretics or chronic kidney disease."};
  },
  formula: 'FENa (%) = (Urine Na × Plasma Cr) / (Plasma Na × Urine Cr) × 100',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
