import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'serum-osmolality',
  title: 'Serum Osmolality Calculator',
  description: 'Calculate estimated serum osmolality from sodium, glucose and BUN.',
  category: 'Electrolytes',
  keywords: ['osmolality', 'serum', 'sodium'],
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
    "id": "glucose",
    "label": "Glucose",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0,
    "max": 1000,
    "step": 0.01
  },
  {
    "id": "bun",
    "label": "BUN",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0,
    "max": 300,
    "step": 0.01
  }
],
  calculate(values) {
    const osm=2*num(values.sodium)+num(values.glucose)/18+num(values.bun)/2.8;
 return {primary:{label:"Estimated serum osmolality",value:fixed(osm,1),unit:"mOsm/kg"}};
  },
  formula: '2 × Na + glucose/18 + BUN/2.8',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
