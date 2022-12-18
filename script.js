// create a function to generate a snowflake element
function createSnowflake() {
  const snowflake = document.createElement("div")
  snowflake.classList.add("snowflake")
  snowflake.style.left = `${Math.random() * 100}vw`
  snowflake.addEventListener("animationiteration", () => {
    // remove the snowflake element from the DOM when the animation completes
    snowflake.remove()
  })
  return snowflake
}

// select the container element where the snowflakes will be added
const container = document.querySelector(".snowfall-container")

// create and append 100 snowflake elements to the container
// for (let i = 0; i < 100; i++) {
//   container.appendChild(createSnowflake())
// }

setInterval(() => {
  const snowflake = createSnowflake()
  container.appendChild(snowflake)
  setTimeout(() => {
    snowflake.remove()
  }, 5000)
}, 100)
