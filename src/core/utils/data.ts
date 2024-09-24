export const getTimeOffsetOrDate = (date: string) => {
  const now = new Date();
  const createdAt = new Date(date);
  const offset = now.getTime() - createdAt.getTime();

  if (offset < 60000) {
    return "Just now";
  }

  if (offset < 3600000) {
    return `${Math.floor(offset / 60000)}m`;
  }

  if (offset < 86400000) {
    return `${Math.floor(offset / 3600000)}h`;
  }

  if (offset < 604800000) {
    return `${Math.floor(offset / 86400000)}d`;
  }

  const options: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    day: "2-digit",
  };
  return createdAt.toLocaleDateString(undefined, options);
};
