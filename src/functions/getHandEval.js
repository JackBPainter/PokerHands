import {
  VALUES,
  STRAIGHTS,
  HIGH,
  PAIR,
  STRAIGHT,
  FLUSH,
  STRAIGHTFLUSH,
  ROYALFLUSH,
} from "../utils";

const checkValueRank = (firstCard, secondCard) => {
  return firstCard.value >= secondCard.value
    ? VALUES.reverse().indexOf(firstCard.value) + 1
    : VALUES.reverse().indexOf(secondCard.value) + 1;
};

const checkFlushRank = (firstCard, secondCard) => {
    return firstCard.value >= secondCard.value
    ? VALUES.indexOf(firstCard.value) + 1
    : VALUES.indexOf(secondCard.value) + 1;
}


const completeRank = (rank) => {
  if (rank === 1) {
    return `${rank}st`;
  } else if (rank === 2) {
    return `${rank}nd`;
  } else if (rank === 3) {
    return `${rank}rd`;
  } else {
    return `${rank}th`;
  }
};

const getHigh = (firstCard, secondCard) => {
  let rank = checkValueRank(firstCard, secondCard);
  return { rank, title: HIGH };
};

const getPair = (firstCard, secondCard) => {
  let rank = checkValueRank(firstCard, secondCard);
  return { rank, title: PAIR };
};

const getStraight = (firstCard, secondCard) => {
  const newArr = STRAIGHTS.map((str) => str.split(""));
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (
      newArr[i].includes(firstCard.value) &&
      newArr[i].includes(secondCard.value)
    ) {
      result.push(newArr[i].join(""));
    }
  }
  let rank = STRAIGHTS.indexOf(result[0]) + 1;
  if (rank > 0) {
    return { rank, title: STRAIGHT };
  } else {
    return false;
  }
};

const getFlush = (firstCard, secondCard) => {
  let rank = checkFlushRank(firstCard, secondCard);
  return { rank, title: FLUSH };
};

const getStraightFlushDraw = (firstCard, secondCard) => {
  let straightRank = getStraight(firstCard, secondCard);
  straightRank.rank === 1
    ? (straightRank.title = ROYALFLUSH)
    : (straightRank.title = STRAIGHTFLUSH);
  return straightRank;
};

export default function getHandEval(firstCard, secondCard) {
  if (
    firstCard.suit === secondCard.suit &&
    getStraight(firstCard, secondCard) !== false
  ) {
    return getStraightFlushDraw(firstCard, secondCard);
  } else if (
    (firstCard.suit === secondCard.suit) === true &&
    getStraight(firstCard, secondCard) === false
  ) {
    return getFlush(firstCard, secondCard);
  } else if (
    firstCard.value !== secondCard.value &&
    firstCard.suit !== secondCard.suit &&
    getStraight(firstCard, secondCard) !== false
  ) {
    return getStraight(firstCard, secondCard);
  } else if (firstCard.value === secondCard.value) {
    return getPair(firstCard, secondCard);
  } else {
    return getHigh(firstCard, secondCard);
  }
}
