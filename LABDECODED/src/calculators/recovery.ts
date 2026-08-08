import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'recovery',
  title: 'Percent Recovery',
  description: 'Calculate analytical recovery.',
  category: 'Statistics',
  keywords: ['recovery', 'laboratory'],
  featured: false,
  inputs: [
  {
    "id": "measured",
    "label": "Measured result",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 0,
    "max": 1000000000.0,
    "step": 0.01
  },
  {
    "id": "expected",
    "label": "Expected result",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 1e-06,
    "max": 1000000000.0,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.measured)/num(values.expected)*100; return {primary:{label:"Recovery",value:fixed(r,2),unit:"%"}};
  },
  formula: 'Recovery% = measured / expected × 100',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
