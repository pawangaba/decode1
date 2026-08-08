import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'mch',
  title: 'MCH Calculator',
  description: 'Calculate mean corpuscular hemoglobin.',
  category: 'Hematology',
  keywords: ['mch'],
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
    const r=10*num(values.hemoglobin)/num(values.rbc); return {primary:{label:"MCH",value:fixed(r,1),unit:"pg"}};
  },
  formula: 'MCH (pg) = Hb (g/dL) × 10 / RBC (10⁶/µL)',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
