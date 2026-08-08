import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'mchc',
  title: 'MCHC Calculator',
  description: 'Calculate mean corpuscular hemoglobin concentration.',
  category: 'Hematology',
  keywords: ['mchc'],
  featured: false,
  inputs: [
  {
    "id": "hemoglobin",
    "label": "Hemoglobin",
    "type": "number",
    "unit": "g/dL",
    "required": true,
    "min": 1,
    "max": 25,
    "step": 0.01
  },
  {
    "id": "hct",
    "label": "Hematocrit",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 1,
    "max": 70,
    "step": 0.01
  }
],
  calculate(values) {
    const r=100*num(values.hemoglobin)/num(values.hct); return {primary:{label:"MCHC",value:fixed(r,1),unit:"g/dL"}};
  },
  formula: 'MCHC (g/dL) = Hb × 100 / Hct (%)',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
