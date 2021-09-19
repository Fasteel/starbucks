import { shallow } from "enzyme";
import Link from "./Link";
import { Pin } from "./assets";
import { testIdIs } from "./utils";

describe("Link", () => {
  it("Should display the logo", () => {
    const wrapper = shallow(<Link Icon={Pin} />);
    const icon = wrapper.findWhere(testIdIs("icon"));
    expect(icon).toHaveLength(1);
  });
  it("Should not display the logo", () => {
    const wrapper = shallow(<Link />);
    const icon = wrapper.findWhere(testIdIs("icon"));
    expect(icon).toHaveLength(0);
  });
  it("Should print the label", () => {
    const wrapper = shallow(<Link Icon={Pin} label="Hello world" />);
    const label = wrapper.findWhere(testIdIs("label")).text();
    expect(label).toBe("Hello world");
  });
  it("Should call onClick when clicked", () => {
    const mockOnClick = jest.fn();
    const wrapper = shallow(<Link onClick={mockOnClick} />);
    wrapper.simulate("click");
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
