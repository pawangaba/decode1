import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'osmolal-gap',
  title: 'Osmolal Gap',
  description: 'Compare measured and calculated serum osmolality.',
  category: 'Electrolytes',
  keywords: ['osmolal gap', 'osmolality'],
  featured: false,
  inputs: [
  {
    "id": "measured",
    "label": "Measured osmolality",
    "type": "number",
    "unit": "mOsm/kg",
    "required": true,
    "min": 200,
    "max": 500,
    "step": 0.01
  },
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
    const calc=2*num(values.sodium)+num(values.glucose)/18+num(values.bun)/2.8;
 const gap=num(values.measured)-calc; return {primary:{label:"Osmolal gap",value:fixed(gap,1),unit:"mOsm/kg"},secondary:[{label:"Calculated osmolality",value:fixed(calc,1),unit:"mOsm/kg"}]};
  },
  formula: 'Osmolal gap = measured osmolality − calculated osmolality',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
