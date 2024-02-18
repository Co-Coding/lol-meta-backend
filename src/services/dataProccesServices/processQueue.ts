export const queueProcess = async (matches: any, queuesData: any) => {
  const queueProcessed = matches.map((match: any) => {
    const queueData = queuesData.find(
      (queue: any) => queue.queueId === match.info.queueId
    );
    match.info.queueData = queueData;
    return match;
  });

  return queueProcessed;
};
