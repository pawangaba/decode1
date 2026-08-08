import type { CalculatorDefinition } from "../types/calculator";
const num=(v:string)=>Number(v);
const fixed=(v:number,n=2)=>Number.isFinite(v)?Number(v.toFixed(n)):0;

const calculator: CalculatorDefinition = {
  slug: 'edd',
  title: 'Estimated Due Date',
  description: "Estimate due date from the last menstrual period using Naegele's rule.",
  category: 'Reproductive',
  keywords: ['edd', 'due date', 'pregnancy'],
  featured: false,
  inputs: [
  {
    "id": "lmp",
    "label": "Last menstrual period",
    "type": "date",
    "required": true
  }
],
  calculate(values) {
    const d=new Date(values.lmp+"T00:00:00"); d.setDate(d.getDate()+280);
 return {primary:{label:"Estimated due date",value:d.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}};
  },
  formula: 'EDD ≈ LMP + 280 days',
  references: [
  {
    "title": "LabDecoded calculator reference \u2014 verify against current clinical guidance."
  }
]
};
export default calculator;
