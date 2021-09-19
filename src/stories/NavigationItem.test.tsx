import { shallow } from "enzyme";
import NavigationItem from "./NavigationItem";

describe("NavigationItem", () => {
  it("Should display label", () => {
    const wrapper = shallow(<NavigationItem label="My label" />);
    expect(wrapper.text()).toBe("My label");
  });
  it("Should call onClick", () => {
    const mockOnClick = jest.fn();
    const wrapper = shallow(<NavigationItem onClick={mockOnClick} />);
    wrapper.simulate("click");
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
