const wrapper = document.querySelector('.wrapper')
const image = document.querySelector('.intro-img')

const { width, height } = wrapper.getBoundingClientRect()
const halfWidth = width / 2
const halfHeight = height / 2

wrapper.addEventListener('mousemove', event => {
   const {offsetX, offsetY} = event

   const rotationX = ((offsetX - halfWidth) / halfWidth) * 10
   const rotationY = ((offsetY - halfHeight) / halfHeight) * 10

   image.getElementsByClassName.trasform - `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
})