const firstReq = new XMLHttpRequest();

firstReq.addEventListener("load", function () {
  console.log("IT Works");
  const data = JSON.parse(this.responseText);
  console.log(data);
});
firstReq.addEventListener("error", () => {
  console.log("error");
});
