
type ScreenSize = "width" | "height"

export const screenSizes = (type: ScreenSize, width = 0, height = 0 ) => {

  if(type === "width"){
    if(width < 360 ) return 197
    else if(width >= 360 && width < 480) return 297
    else if(width >= 480 && width < 576) return 197
    else if(width >= 576 && width < 768) return 197
    else if(width >= 768 && width < 992) return 197
    else if(width >= 992 && width < 1280) return 197
    else if (width >= 1280 ) return 197  
  }
}