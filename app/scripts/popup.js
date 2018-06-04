/* global browser */
console.log('Popup clicked')
browser.tabs.create({
  url: '/pages/app.html',
  active: true
})
