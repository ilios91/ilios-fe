
export const screenSizes = (screenWidth: number, screenHeight: number) => {
  return {
    isExtraTinyScreen: screenWidth <= 360,
    isTinyScreen: screenWidth >= 361 && screenWidth <= 400,
    isMobile: screenWidth >= 401 && screenWidth <= 500,
    isSmallScreen: screenWidth >= 501 && screenWidth <= 600,
    isMediumSmallScreen: screenWidth >= 601 && screenWidth <= 750,
    isMediumScreen: screenWidth >= 751 && screenWidth <= 998,
    isDesktop: screenWidth >= 999 && screenWidth <= 1200,
  }
}