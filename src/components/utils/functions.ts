
type ScreenSize = "width" | "height"

export const screenSizes = (type: ScreenSize, width = 0, height = 0 ) => {

  if(type === "width"){
    return {
      xs: width < 576,
      sm: width >= 576 && width < 768,
      md: width >= 768 && width < 992,
      tablet: width >= 992 && width < 1280,
      lg: width >= 1280 && width < 1440,
      xl: width >= 1440
    }
  }

  else if (type === "height"){
    return {
      xs: height < 576,
      sm: height >= 576 && height < 768,
      md: height >= 768 && height < 992,
      tablet: height >= 992 && height < 1280,
      lg: height >= 1280 && height < 1440,
      xl: height >= 1440
    }
  }
}