import { ShallowWrapper } from "enzyme";

export const testIdIs = (value: string) => {
  return (node: ShallowWrapper<any, any>) => node.prop("test-id") === value;
};
