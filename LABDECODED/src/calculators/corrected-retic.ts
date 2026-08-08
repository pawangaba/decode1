import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'retic-production',
  title: 'Reticulocyte Production Index (Simple)',
  description: 'Calculate a corrected reticulocyte percentage from reticulocytes and hematocrit.',
  category: 'Hematology',
  keywords: ['reticulocyte'],
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
    "label": "Hematocrit",
    "type": "number",
    "unit": "%",
    "required": true,
    "min": 5,
    "max": 70,
    "step": 0.01
  }
],
  calculate(values) {
    const r=num(values.retic)*num(values.hct)/45; return {primary:{label:"Corrected reticulocyte %",value:fixed(r,2),unit:"%"}};
  },
  formula: 'Corrected retic = retic % × patient Hct / 45',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
