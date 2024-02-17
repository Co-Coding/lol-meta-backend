const _ = require("lodash");

export const perksProcessing = async (matches: any, perksData: any) => {
  const matchesDeepCloned = _.cloneDeep(matches);

  const perksProcessed = matchesDeepCloned.map((match: any) => {
    const participants = match.info.participants.map((participant: any) => {
      const participantPerks = participant.perks;

      const perkStyleId = participantPerks.styles[0].style;
      const mainPerkId = participantPerks.styles[0].selections[0].perk;
      // const perkStyleInfo = getPerkInfo(perksData, perkStyleId);
      const mainPerkInfo = getMainPerkInfo(perksData, perkStyleId, mainPerkId);

      const mainPerkImage = mainPerkInfo
        ? mainPerkInfo.icon.split("/").slice(1).join("/")
        : null;

      // participantPerks.styles[0].styleInfoOne = perkStyleInfo;
      participantPerks.styles[0].mainPerkInfo = mainPerkInfo;
      participantPerks.styles[0].perksData = perksData;
      participantPerks.styles[0].image = `https://ddragon.leagueoflegends.com/cdn/img/perk-images/${mainPerkImage}`;

      // const perkSubStyleId = participantPerks.styles[1].style;
      // const perkSubStyleInfo = getPerkInfo(perksData, perkSubStyleId);
      // participantPerks.styles[1].styleInfoTwo = perkSubStyleInfo;

      // const perkSubStyleImage = perkSubStyleInfo.icon
      //   .split("/")
      //   .slice(1)
      //   .join("/");

      // participantPerks.styles[1].image = `https://ddragon.leagueoflegends.com/cdn/img/perk-images/${perkSubStyleImage}`;

      return participant;
    });

    return { ...match, info: { ...match.info, participants } };
  });

  return perksProcessed;
};

const getMainPerkInfo = (perksData: any, perkStyleId: any, mainPerkId: any) => {
  const getStyle = perksData.find((styleData: any) => styleData.id === perkStyleId);

  const mainPerkInfo = getStyle.slots[0].runes.find(
    (rune: any) => rune.id === mainPerkId
  );

  return mainPerkInfo ?? null;
};