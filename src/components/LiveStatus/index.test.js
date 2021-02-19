import { shallow } from "enzyme";
import { findByAttr } from "../../testUtils";
import LiveStatus from "./index";

test("renders component without crashing", () => {
  const wrapper = shallow(<LiveStatus />);
  expect(wrapper.length).toBe(1);
});

test("renders correct data when info prop is passed", () => {
  const wrapper = shallow(<LiveStatus status="FT" />);
  let component = findByAttr(wrapper, "componentStatus");
  expect(component.text()).toBe("ENDED");
});
