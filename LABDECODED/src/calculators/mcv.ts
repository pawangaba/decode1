import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'mcv',
  title: 'MCV Calculator',
  description: 'Calculate mean corpuscular volume.',
  category: 'Hematology',
  keywords: ['mcv', 'rbc'],
  featured: false,
  inputs: [
  {
    "id": "hct",
    "label": "Hematocrit",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 1,
    "max": 70,
    "step": 0.01
  },
  {
    "id": "rbc",
    "label": "RBC count",
    "type": "number",
    "unit": "10\u2076/\u00b5L",
    "required": true,
    "min": 0.1,
    "max": 10,
    "step": 0.01
  }
],
  calculate(values) {
    const r=10*num(values.hct)/num(values.rbc); return {primary:{label:"MCV",value:fixed(r,1),unit:"fL"}};
  },
  formula: 'MCV (fL) = Hct (%) × 10 / RBC (10⁶/µL)',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
