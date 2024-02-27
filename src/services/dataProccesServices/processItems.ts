import { Matches, Participant } from "../types";
import _ from "lodash"

export const processItems = (matches: Matches[]) => {
  const matchesDeepCloned = _.cloneDeep(matches);

  type itemAssets = Extract<keyof Participant, `item${number}`>

  const matchProcessed = matchesDeepCloned.map((match: Matches) => {

    const participants = match.info.participants.map((participant: Participant) => {
      const itemAssets: itemAssets[] = [
        "item0",
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
      ];

      itemAssets.forEach((item) => {
        participant[item] = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${participant[item]}.png`;
      });

      return participant;
    });

    return { ...match, info: { ...match.info, participants } };
  });

  return matchProcessed;
};

