import { render } from "enzyme";
import { Button } from "./Button";

describe("Button", () => {
  it("Should display text inside button", () => {
    const wrapper = render(<Button label="Join now" />);
    expect(wrapper.text()).toEqual("Join now");
  });
});
