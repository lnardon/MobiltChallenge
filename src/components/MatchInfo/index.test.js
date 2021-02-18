import { shallow } from "enzyme";
import { findByAttr } from "../../testUtils";
import MatchInfo from "./index";

test("renders component without crashing", () => {
  const wrapper = shallow(
    <MatchInfo homeTeam="USA" awayTeam="BRA" status={{ type: "Finished" }} />
  );
  console.log(wrapper);
  expect(wrapper.length).toBe(1);
});

test("renders correct data when info prop is passed", () => {
  const wrapper = shallow(
    <MatchInfo homeTeam="USA" awayTeam="BRA" status={{ type: "Finished" }} />
  );
  let component = findByAttr(wrapper, "componentHomeTeam");
  expect(component.text()).toBe("USA");
  component = findByAttr(wrapper, "componentAwayTeam");
  expect(component.text()).toBe("BRA");
});
