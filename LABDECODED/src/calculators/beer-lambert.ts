import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'beer-lambert',
  title: 'Beer-Lambert Law Calculator',
  description: 'Calculate concentration using absorbance, path length and molar absorptivity.',
  category: 'Laboratory',
  keywords: ['beer lambert', 'spectrophotometry'],
  featured: false,
  inputs: [
  {
    "id": "absorbance",
    "label": "Absorbance",
    "type": "number",
    "unit": "",
    "required": true,
    "min": 0,
    "max": 10,
    "step": 0.01
  },
  {
    "id": "epsilon",
    "label": "Molar absorptivity",
    "type": "number",
    "unit": "L\u00b7mol\u207b\u00b9\u00b7cm\u207b\u00b9",
    "required": true,
    "min": 1e-06,
    "max": 10000000,
    "step": 0.01
  },
  {
    "id": "path",
    "label": "Path length",
    "type": "number",
    "unit": "cm",
    "required": true,
    "min": 0.01,
    "max": 100,
    "step": 0.01
  }
],
  calculate(values) {
    const c=num(values.absorbance)/(num(values.epsilon)*num(values.path)); return {primary:{label:"Concentration",value:c,unit:"mol/L"}};
  },
  formula: 'A = εbc',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
