const scrollFunction = (side, carouselItemsRow) => {
  if (side > 0) {
    if (window.innerWidth >= 0 && window.innerWidth <= 576) {
      carouselItemsRow.scrollLeft += window.innerWidth / 1.5
    } else if (window.innerWidth > 576 && window.innerWidth <= 768) {
      carouselItemsRow.scrollLeft += window.innerWidth / 3
    } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
      carouselItemsRow.scrollLeft += window.innerWidth / 6
    } else {
      carouselItemsRow.scrollLeft += window.innerWidth / 8
    }
  } else {
    if (window.innerWidth >= 0 && window.innerWidth <= 576) {
      carouselItemsRow.scrollLeft -= window.innerWidth / 1.5
    } else if (window.innerWidth > 576 && window.innerWidth <= 768) {
      carouselItemsRow.scrollLeft -= window.innerWidth / 3
    } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
      carouselItemsRow.scrollLeft -= window.innerWidth / 6
    } else {
      carouselItemsRow.scrollLeft -= window.innerWidth / 8
    }
  }
}

export default scrollFunction