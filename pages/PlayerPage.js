const { I } = inject();

module.exports = {
  bannerOverlay: locate('div')
    .withChild('img[src="https://d1z29ah7avd54v.cloudfront.net/assets/images/be9b0018-b303-437a-a8fd-effcd9343335"]')
    .as('Banner Overlay'),
  gifOverlay: locate('div')
    .withChild('img[src="https://d1z29ah7avd54v.cloudfront.net/assets/images/f6612cf6-ef31-4a95-86a5-d212cbf68203"]')
    .as('GIF Overlay'),
}
