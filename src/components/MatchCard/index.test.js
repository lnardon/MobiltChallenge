import { shallow } from "enzyme";
import { findByAttr } from "../../testUtils";
import MatchCard from "./index";

const baseInfo = {
  name: "FK Tyumen - Luch-Energiya Vladivostok",
  competition: "Football National League",
  country: "Russia",
  timestamp: 1470484800,
  date: "06.08.2016.",
  time: "12:00",
  status: {
    code: 100,
    type: "finished",
  },
  round: {
    round: 6,
  },
  homeTeam: {
    id: 75207,
    name: "FK Tyumen",
    slug: "fk-tyumen",
    gender: "M",
    subTeams: [],
  },
  awayTeam: {
    id: 5852,
    name: "Luch-Energiya Vladivostok",
    slug: "luch-energiya-vladivostok",
    gender: "M",
    subTeams: [],
  },
  homeScore: {
    current: 0,
    period1: 0,
    normaltime: 0,
  },
  awayScore: {
    current: 0,
    period1: 0,
    normaltime: 0,
  },
  liveStatus: "FT",
};

test("renders component without crashing", () => {
  const wrapper = shallow(<MatchCard info={baseInfo} />);
  expect(wrapper.length).toBe(1);
});

test("renders correct data when info prop is passed", () => {
  const wrapper = shallow(<MatchCard info={baseInfo} />);
  let component = findByAttr(wrapper, "componentCountry");
  expect(component.text()).toBe("Russia");
  component = findByAttr(wrapper, "componentCompetition");
  expect(component.text()).toBe("Football National League");
  component = findByAttr(wrapper, "componentScore");
  expect(component.text()).toBe("0 - 0");
});
