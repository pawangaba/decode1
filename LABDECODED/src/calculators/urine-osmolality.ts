import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'urine-osmolality',
  title: 'Urine Osmolality Calculator',
  description: 'Estimate urine osmolality from urine sodium, potassium, urea and glucose.',
  category: 'Renal',
  keywords: ['urine osmolality', 'urine', 'kidney'],
  featured: false,
  inputs: [
  {
    "id": "na",
    "label": "Urine sodium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 0,
    "max": 1000,
    "step": 0.01
  },
  {
    "id": "k",
    "label": "Urine potassium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 0,
    "max": 1000,
    "step": 0.01
  },
  {
    "id": "urea",
    "label": "Urine urea",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0,
    "max": 5000,
    "step": 0.01
  },
  {
    "id": "glucose",
    "label": "Urine glucose",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 0,
    "max": 5000,
    "step": 0.01
  }
],
  calculate(values) {
    const osm=2*(num(values.na)+num(values.k))+num(values.urea)/2.8+num(values.glucose)/18;
 return {primary:{label:"Estimated urine osmolality",value:fixed(osm,1),unit:"mOsm/kg"}};
  },
  formula: '2 × (Na + K) + urea/2.8 + glucose/18',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
