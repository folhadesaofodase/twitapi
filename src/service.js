import puppeteer from 'puppeteer'

const twit = async msg => {
	const TWITTER_URL = 'https://twitter.com/login'

	const browser = await puppeteer.launch({ headless: false })
	const page = await browser.newPage()

	await page.goto(TWITTER_URL)
	
	try {
		page.waitForNavigation({ waitUntil: 'domcontentloaded' })
	} catch(err) {
		console.log('foudaci lol')
	}

	await page.type('input[type=text]', process.env.TWITTER_EMAIL)
	await page.type('.js-password-field', process.env.TWITTER_PASSWORD)

	await page.$eval('FORM.clearfix', form => form.submit())
	await page.waitForSelector('.css-4rbku5.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1waj6vr.r-1loqt21.r-1w2pmg.r-1jayybb.r-mtrfb5.r-mk0yit.r-o7ynqc.r-6416eg.r-lrvibr')

	await page.click('.css-4rbku5.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1waj6vr.r-1loqt21.r-1w2pmg.r-1jayybb.r-mtrfb5.r-mk0yit.r-o7ynqc.r-6416eg.r-lrvibr')
	await page.waitForSelector('.public-DraftEditorPlaceholder-hasFocus')

	await page.keyboard.type(msg)
	await page.click('.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-1n0xq6e.r-1vuscfd.r-1dhvaqw.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr')
}

export default { twit }