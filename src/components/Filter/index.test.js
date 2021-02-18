import { shallow } from "enzyme";
import { findByAttr } from "../../testUtils";
import Filter from "./index";

test("renders component without crashing", () => {
  const wrapper = shallow(<Filter />);
  console.log(wrapper);
  expect(wrapper.length).toBe(1);
});

test("renders correct data when info prop is passed", () => {
  const wrapper = shallow(
    <Filter info={{ all: "11", ended: "12", live: "13", upcoming: "14" }} />
  );
  let component = findByAttr(wrapper, "componentAll");
  expect(component.text()).toBe("11");
  component = findByAttr(wrapper, "componentFinished");
  expect(component.text()).toBe("12");
  component = findByAttr(wrapper, "componentLive");
  expect(component.text()).toBe("13");
  component = findByAttr(wrapper, "componentUpcoming");
  expect(component.text()).toBe("14");
});

test("renders default data when no info prop is passed", () => {
  const wrapper = shallow(<Filter />);
  let component = findByAttr(wrapper, "componentAll");
  expect(component.text()).toBe("00");
  component = findByAttr(wrapper, "componentFinished");
  expect(component.text()).toBe("00");
  component = findByAttr(wrapper, "componentLive");
  expect(component.text()).toBe("00");
  component = findByAttr(wrapper, "componentUpcoming");
  expect(component.text()).toBe("00");
});
