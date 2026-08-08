import type { CalculatorDefinition } from "../types/calculator";

const num = (v: string) => Number(v);
const fixed = (v: number, n = 2) => (Number.isFinite(v) ? Number(v.toFixed(n)) : 0);

const calculator: CalculatorDefinition = {
  slug: "zscore",
  title: "Z-Score Calculator",
  description:
    "Calculate a z-score from an observed value, population mean, and standard deviation. Includes interpretation of how far the value is from the mean.",
  category: "Statistics",
  keywords: ["z score", "statistics", "standard score", "normal distribution"],
  featured: false,

  inputs: [
    {
      id: "x",
      label: "Observed value",
      type: "number",
      unit: "",
      required: true,
      min: -1000000000.0,
      max: 1000000000.0,
      step: "any",          // ← fixed
    },
    {
      id: "mean",
      label: "Mean",
      type: "number",
      unit: "",
      required: true,
      min: -1000000000.0,
      max: 1000000000.0,
      step: "any",          // ← fixed
    },
    {
      id: "sd",
      label: "Standard deviation",
      type: "number",
      unit: "",
      required: true,
      min: 1e-06,
      max: 1000000000.0,
      step: "any",          // ← fixed
    },
  ],

  calculate(values) {
    const x = num(values.x);
    const mean = num(values.mean);
    const sd = num(values.sd);

    if (sd === 0 || !Number.isFinite(sd)) {
      return {
        primary: { label: "Z-score", value: "—" },
        interpretation: "Standard deviation must be greater than zero.",
      };
    }

    const z = (x - mean) / sd;
    const zRounded = fixed(z, 3);

    let interpretation = "";
    const absZ = Math.abs(z);

    if (absZ < 1) {
      interpretation = `The value is within 1 standard deviation of the mean (typical range).`;
    } else if (absZ < 2) {
      interpretation = `The value is between 1 and 2 standard deviations from the mean (moderately unusual).`;
    } else if (absZ < 3) {
      interpretation = `The value is between 2 and 3 standard deviations from the mean (unusual).`;
    } else {
      interpretation = `The value is more than 3 standard deviations from the mean (very unusual / extreme).`;
    }

    if (z > 0) {
      interpretation += ` It is ${zRounded} SD above the mean.`;
    } else if (z < 0) {
      interpretation += ` It is ${Math.abs(zRounded)} SD below the mean.`;
    } else {
      interpretation += ` It is exactly at the mean.`;
    }

    return {
      primary: {
        label: "Z-score",
        value: zRounded,
      },
      interpretation,
    };
  },

  formula: "z = (x − mean) / SD",

  references: [
    {
      title: "LabDecoded calculator reference — verify against current clinical guidance.",
    },
  ],
};

export default calculator;