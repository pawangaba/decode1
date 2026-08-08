import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'mentzer',
  title: 'Mentzer Index',
  description: 'Calculate the Mentzer index from MCV and RBC count.',
  category: 'Hematology',
  keywords: ['mentzer', 'microcytosis'],
  featured: false,
  inputs: [
  {
    "id": "mcv",
    "label": "MCV",
    "type": "number",
    "unit": "fL",
    "required": true,
    "min": 10,
    "max": 150,
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
    const x=num(values.mcv)/num(values.rbc); return {primary:{label:"Mentzer index",value:fixed(x,1)},interpretation:x<13?"Pattern often associated with thalassemia trait":"Pattern often associated with iron deficiency; confirm with appropriate testing."};
  },
  formula: 'Mentzer index = MCV / RBC count',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
