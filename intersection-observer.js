const faderObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
      faderObserver.unobserve(entry.target)
    }
  })
})

const faders = document.querySelectorAll(".fader")

faders.forEach((fader) => {
  faderObserver.observe(fader)
})

const quoteObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
      faderObserver.unobserve(entry.target)
    }
  })
})

const quote = document.querySelector(".quote")
quoteObserver.observe(quote)
