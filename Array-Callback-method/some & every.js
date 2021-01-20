const words = ["dog", "dig", "log"];
const all = words.every((word) => word.length === 3);
const all1 = words.every((word) => {
  const last = word.length - 1;
  return word[last] == "g";
});

const som = words.some((word) => word[0] === "d");
// some je kono akta word test korbe.
//ar every check korbe whole word ta, that is different
