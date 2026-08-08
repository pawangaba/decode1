import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'stool-osmotic-gap',
  title: 'Stool Osmotic Gap',
  description: 'Estimate stool osmotic gap from measured stool osmolality and electrolytes.',
  category: 'Gastrointestinal',
  keywords: ['stool', 'osmotic gap'],
  featured: false,
  inputs: [
  {
    "id": "osm",
    "label": "Stool osmolality",
    "type": "number",
    "unit": "mOsm/kg",
    "required": true,
    "min": 200,
    "max": 500,
    "step": 0.01
  },
  {
    "id": "na",
    "label": "Stool sodium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 0,
    "max": 300,
    "step": 0.01
  },
  {
    "id": "k",
    "label": "Stool potassium",
    "type": "number",
    "unit": "mmol/L",
    "required": true,
    "min": 0,
    "max": 300,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.osm)-2*(num(values.na)+num(values.k)); return {primary:{label:"Stool osmotic gap",value:fixed(r,1),unit:"mOsm/kg"}};
  },
  formula: 'Stool osmotic gap = 290 − 2 × (stool Na + stool K)',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
