const ghpages = require('gh-pages')
const fse = require('fs-extra')

const start = async () => {
  if (process.env.CUSTOM_DOMAIN) {
    await fse.outputFile('./dist/CNAME', 'blhx.danmu9.com')
  }
  await fse.copy('./src/lacia.html', './dist/blhxfy/lacia.html')
  await fse.outputFile('./dist/blhxfy/game-config.js', `document.write('<script src="' + Game.jsUri + '/config.js?lyria"></script>')
document.write('<script src="https://blhx.danmu9.com/blhxfy/extension.ios.user.js"></script>')`)

  console.log('start publish...')
  ghpages.publish('dist', {
    add: false
  }, function () {
    console.log('Finished at', '\x1b[36m\x1b[2m' + new Date().toLocaleString() + '\x1b[0m')
  })
}

start()
