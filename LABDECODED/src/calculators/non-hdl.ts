import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'non-hdl',
  title: 'Non-HDL Cholesterol',
  description: 'Calculate non-HDL cholesterol.',
  category: 'Endocrinology',
  keywords: ['non hdl', 'cholesterol'],
  featured: false,
  inputs: [
  {
    "id": "total",
    "label": "Total cholesterol",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 20,
    "max": 1000,
    "step": 0.01
  },
  {
    "id": "hdl",
    "label": "HDL cholesterol",
    "type": "number",
    "unit": "mg/dL",
    "required": true,
    "min": 1,
    "max": 300,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.total)-num(values.hdl); return {primary:{label:"Non-HDL cholesterol",value:fixed(r,1),unit:"mg/dL"}};
  },
  formula: 'Non-HDL-C = total cholesterol − HDL-C',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
