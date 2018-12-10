module.exports = function hello() {
  // Change this message to see hot module replacement in action.
  const msg = 'Hello World'

  console.log(msg)
  document.querySelector('h1').textContent = msg;
}
