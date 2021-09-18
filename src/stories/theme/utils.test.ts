import { getRgbValue, getRgbStringValue, getRgbaStringValue } from "./utils";

describe("utils", () => {
  it("getRgbValue should return the correct value", () => {
    expect(getRgbValue("#eb4034")).toEqual({ r: 235, g: 64, b: 52 });
  });
  it("getRgbValue should throw error", () => {
    expect(() => getRgbValue("#ebm34034")).toThrowError(
      "Unvalid hexadecimal format"
    );
  });
  it("getRgbStringValue return the correct value", () => {
    expect(getRgbStringValue("#eb4034")).toEqual("rgb(235, 64, 52)");
  });
  it("getRgbaStringValue return the correct value", () => {
    expect(getRgbaStringValue("#eb4034", 0.8)).toEqual(
      "rgba(235, 64, 52, 0.8)"
    );
  });
});
