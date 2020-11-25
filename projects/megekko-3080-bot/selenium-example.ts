import { Builder, By, Key, until, WebDriver } from "selenium-webdriver"
import firefox from "selenium-webdriver/firefox"
import dotenv from "dotenv"
import "geckodriver"

dotenv.config({ path: ".env" })

let url: string = "https://www.megekko.nl/info/RTX-3080"
let title: string = "Megekko.nl - Nvidia RTX3000 en AMD Ryzen 5000 statement."
let orderidElem: string = "wachtrij_orderid"
let postcodeElem: string = "wachtrij_postcode"
let orderid: any = process.env.ORDERID
let postcode: any = process.env.POSTAL_CODE
let resultElem: string = "wachtrij_output"

const options: any = new firefox.Options()
options.setBinary("/usr/lib/firefox/firefox").headless()

const main: any = async () => {
	let driver: WebDriver = await new Builder()
		.forBrowser("firefox")
		.setFirefoxOptions(options)
		.build()
	
	try {
		await driver.get(url)
		await driver.wait(until.titleIs(title), 3000)
		await driver.findElement(By.id(orderidElem)).sendKeys(orderid)
		await driver.findElement(By.id(postcodeElem)).sendKeys(postcode, Key.TAB, Key.RETURN)
		await driver.wait(until.elementTextIs(driver.findElement(By.id(resultElem)), "Voer je orderID en postcode in."), 3000)
		let elems: any = await driver.findElement(By.id(resultElem)).findElements(By.css("div"))
		let result: any = await elems[7].getText()
		console.log(result.split(" van de "))
	} catch (e) {
		console.error(e)
	} finally {
		await driver.quit()
	}
}

main()
