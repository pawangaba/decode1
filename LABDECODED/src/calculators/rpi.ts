import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'rpi',
  title: 'Reticulocyte Production Index',
  description: 'Estimate the reticulocyte production index.',
  category: 'Hematology',
  keywords: ['rpi', 'reticulocyte'],
  featured: false,
  inputs: [
  {
    "id": "retic",
    "label": "Reticulocytes",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 0,
    "max": 50,
    "step": 0.01
  },
  {
    "id": "hct",
    "label": "Patient hematocrit",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 5,
    "max": 70,
    "step": 0.01
  },
  {
    "id": "normalHct",
    "label": "Reference hematocrit",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 35,
    "max": 50,
    "step": 0.01
  },
  {
    "id": "maturation",
    "label": "Maturation factor",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 1,
    "max": 4,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.retic)*(num(values.hct)/num(values.normalHct))/num(values.maturation); return {primary:{label:"RPI",value:fixed(r,2)}};
  },
  formula: 'RPI = corrected reticulocyte % / maturation factor',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
