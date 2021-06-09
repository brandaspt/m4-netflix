import _ from 'lodash'

export default class SwipeScroll {
	constructor (container) {
		this.container = container
		this.speed = 10
		this.debounceAfter = 0
		
		// binds
		this.scrolled = this.scrolled.bind(this)
		this.animate = this.animate.bind(this)
		
		// state
		this.to = 0
		this.current = 0
		this.animating = false
		this.frameId = 0
		
		this.container.addEventListener('scroll', _.debounce(this.scrolled, this.debounceAfter))
	}
	
	scrolled (event) {
		if (this.animating)
			return
		
		// current position to animate from
		this.current = this.container.scrollLeft
		
		// calculate position to animate to (closest div)
		const children = this.container.children
		const index = Math.round(this.current / children[0].offsetWidth)
		this.to = children[index].offsetLeft

		// run animation
		this.animating = true
		this.frameId = requestAnimationFrame(this.animate)
	}
	
	animate () {
		this.frameId = requestAnimationFrame(this.animate)
		this.current += (this.to - this.current) / this.speed
		this.container.scrollLeft = this.current.toFixed(2)
		
		// quit animation if goal reached
		if (Math.round(this.current) === this.to) {
			this.animating = false
			cancelAnimationFrame(this.frameId)	
		}
	}
}