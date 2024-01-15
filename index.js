showThis();

function showThis() {
  console.log(this);
}

greeting();

const greeting = function () {
  console.log("Hello, how are you doing?");
};
