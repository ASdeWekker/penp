import { Builder, By, until, WebDriver } from "selenium-webdriver"
import firefox from "selenium-webdriver/firefox"

let url: string = "https://www.megekko.nl/info/RTX-3080"
let title: string = "Megekko.nl - Nvidia RTX3000 en AMD Ryzen 5000 statement."
let elemID: string = "wachtrij_output"

const options: any = new firefox.Options()
options.setBinary("/usr/lib/firefox/firefox").headless();

(async function example() {
	let driver: WebDriver = await new Builder()
		.forBrowser("firefox")
		.setFirefoxOptions(options)
		.build()
	try {
		await driver.get(url)
		await driver.wait(until.titleIs(title), 3000)
		let res: any = await driver.findElement(By.id(elemID))
		console.log(await res.getText())
	} finally {
		await driver.quit()
	}
})()
