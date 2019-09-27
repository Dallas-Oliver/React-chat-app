const adjectives = [
  "ecstatic",
  "bouncy",
  "tall",
  "quiet",
  "scary",
  "flippant",
  "excitable",
  "friendly",
  "fearful"
];

const animals = [
  "aardvark",
  "baboon",
  "badger",
  "camel",
  "eagle",
  "clam",
  "penguin",
  "falcon",
  "gecko",
  "hedgehog"
];

const getAdjective = () => {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
};

const getAnimal = () => {
  return animals[Math.floor(Math.random() * animals.length)];
};

const generateUsername = () => {
  return `${getAdjective()}_${getAnimal()}`;
};

export default generateUsername;
