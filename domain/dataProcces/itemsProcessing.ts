const _ = require("lodash");

export const itemsProcessing = (matches: any) => {
  const matchesDeepCloned = _.cloneDeep(matches);

  const matchProcessed = matchesDeepCloned.map((match: any) => {
    const participants = match.info.participants.map((participant: any) => {
      const itemAssets = [
        "item0",
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
      ];

      itemAssets.forEach((item) => {
        participant[
          item
        ] = `http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/${participant[item]}.png`;
      });

      return participant;
    });

    return { ...match, info: { ...match.info, participants } };
  });

  return matchProcessed;
};

