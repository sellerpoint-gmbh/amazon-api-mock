export type Measurement = {
  Unit:
    | "OUNCES"
    | "POUNDS"
    | "KILOGRAMS"
    | "GRAMS"
    | "MILLIGRAMS"
    | "INCHES"
    | "FEET"
    | "METERS"
    | "CENTIMETERS"
    | "MILLIMETERS"
    | "SQUARE_METERS"
    | "SQUARE_CENTIMETERS"
    | "SQUARE_FEET"
    | "SQUARE_INCHES"
    | "GALLONS"
    | "PINTS"
    | "QUARTS"
    | "FLUID_OUNCES"
    | "LITERS"
    | "CUBIC_METERS"
    | "CUBIC_FEET"
    | "CUBIC_INCHES"
    | "CUBIC_CENTIMETERS"
    | "COUNT";
  Value: number;
};
