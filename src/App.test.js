import { shallow } from "enzyme";
import App from "./App";

test("renders APP component without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toBe(1);
});

// test("renders no text when success prop is false", () => {
//   const wrapper = shallow(<Congrats success={false} />);
//   const component = findByAttr(wrapper, "componentCongrats");
//   expect(component.text()).toBe("");
// });

// test("renders correct text when success prop is true", () => {
//   const wrapper = shallow(<Congrats success={true} message={"Success"} />);
//   const message = findByAttr(wrapper, "componentCongratsMessage");
//   expect(message.text()).toBe("Success");
// });
