import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'bmi',
  title: 'BMI Calculator',
  description: 'Calculate body mass index from height and weight.',
  category: 'General',
  keywords: ['bmi', 'body mass index'],
  featured: true,
  inputs: [
  {
    "id": "weight",
    "label": "Weight",
    "type": "number",
    "unit": "kg",
    "required": true,
    "min": 1,
    "max": 500,
    "step": 0.01
  },
  {
    "id": "height",
    "label": "Height",
    "type": "number",
    "unit": "cm",
    "required": true,
    "min": 30,
    "max": 250,
    "step": 0.01
  }
],
  calculate(values) {
    const bmi=num(values.weight)/(num(values.height)/100)**2;
    let interpretation=bmi<18.5?"Underweight":bmi<25?"Healthy weight":bmi<30?"Overweight":"Obesity";
    return {primary:{label:"BMI",value:fixed(bmi,1),unit:"kg/m²"},interpretation};
  },
  formula: 'BMI = weight (kg) / height² (m²)',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
