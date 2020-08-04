export default function completeRank(rank) {
  if (rank === 1) {
    return `${rank}st`;
  } else if (rank === 2) {
    return `${rank}nd`;
  } else if (rank === 3) {
    return `${rank}rd`;
  } else {
    return `${rank}th`;
  }
}
