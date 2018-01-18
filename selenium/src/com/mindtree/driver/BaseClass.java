package com.mindtree.driver;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

public class BaseClass {
	
	public static By getPageElement(String pageName, String locatorName){
		By objectName = null;
		try{
			File fXmlFile = new File("./src/com/mindtree/data/ObjectRepository.xml");
			DocumentBuilderFactory factory =DocumentBuilderFactory.newInstance();
			DocumentBuilder builder = factory.newDocumentBuilder();
			Document doc = builder.parse(fXmlFile);
			
			
			doc.getDocumentElement().normalize();
			
			NodeList pageNameList= doc.getElementsByTagName(pageName);
			for(int i =0; i< pageNameList.getLength(); ++i)
			{
				Element ElementName = (Element)pageNameList.item(i);
				NodeList locatorList = ElementName.getElementsByTagName("locator");
				for(int j=0; j< locatorList.getLength();j++)
				{
					Element locator =(Element) locatorList.item(j);
					String name= locator.getAttribute("name");
					
					if(name.equals(locatorName)){
						String value = locator.getAttribute("value");
						String type = locator.getAttribute("type");
					
						
						if(type.equalsIgnoreCase("id")){
							objectName = By.id(value);
						}else if (type.equalsIgnoreCase("css")){
							objectName = By.cssSelector(value);
						}else if(type.equalsIgnoreCase("className")){
							objectName = By.className(value);
						}else if(type.equalsIgnoreCase("xpath")){
							objectName = By.xpath(value);
						}else if(type.equalsIgnoreCase("linkText")){
							objectName = By.linkText(value);
						}else if(type.equalsIgnoreCase("name")){
							objectName = By.name(value);
						}else if(type.equalsIgnoreCase("partialLinktext")){
							objectName = By.partialLinkText(value);
						}else if(type.equalsIgnoreCase("tagname")){
							objectName = By.tagName(value);
						}
						break;
						}
					}
				}
			if(objectName == null){
				Assert.fail("Element not found in object fails");
			}
			
		}
		catch(Exception e){
			e.printStackTrace();
		}
			return objectName;
		}
		
		public static String getData(String key) {
			Properties property=new Properties();
			try {
				property.load(new FileInputStream("./src/com/mindtree/data/DataRepository.properties"));
			} catch (Exception e) {
				e.printStackTrace();
			}

			return property.getProperty(key);
		
		}
		
		public static WebDriver loadDriver(){
			WebDriver driver=null;
			Properties property=new Properties();
			FileInputStream fi = null;
			try {
				fi = new FileInputStream("./src/com/mindtree/data/config.properties");
			} catch (FileNotFoundException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			try{
				property.load(fi);
			}catch (IOException e) {
				e.printStackTrace();
			}
			String browser=property.getProperty("Browser");
			if(browser.equalsIgnoreCase("firefox"))
			{
				driver=new FirefoxDriver();
			}
			else if(browser.equalsIgnoreCase("chrome")){
				String path=property.getProperty("ChromePath");
				System.setProperty("webdriver.chrome.driver", path);
				driver=new ChromeDriver();
			}
			else if(browser.equalsIgnoreCase("IE")){
				String path=property.getProperty("IEpath");
				System.setProperty("webdriver.ie.driver", path);
				driver=new InternetExplorerDriver();
			}
			else
			{
				System.out.println("invalid browser");
			}
			
			return driver;
		}
}
