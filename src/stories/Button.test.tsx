import { shallow } from "enzyme";
import { Button } from "./Button";

describe("Button", () => {
  it("Should display text inside button", () => {
    const wrapper = shallow(<Button color="primary" label="Join now" />);
    expect(wrapper.text()).toEqual("Join now");
  });
  it("Should call onClick when clicked", () => {
    const mockOnClick = jest.fn();
    const wrapper = shallow(
      <Button onClick={mockOnClick} color="primary" label="Join now" />
    );
    wrapper.simulate("click");
    expect(mockOnClick).toBeCalled();
  });
});
