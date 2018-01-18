package com.mindtree.test;

import org.testng.annotations.Test;

import com.mindtree.driver.BaseClass;

import junit.framework.Assert;

import org.testng.annotations.BeforeMethod;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Reporter;
import org.testng.annotations.AfterMethod;

public class NewTest {
	private static WebDriver driver;

	@Test
	public void creatCarPackage() throws Exception {
		
		Reporter.log("Application Lauched successfully | "
				+ "",true);
		driver.findElement(BaseClass.getPageElement("homepage", "plus")).click();
		Thread.sleep(Integer.parseInt(BaseClass.getData("wait1")));
		

		WebElement borrower = driver.findElement(BaseClass.getPageElement("homepage", "borrower"));
		Select borrowerSelect = new Select(borrower);
		borrowerSelect.selectByIndex(2);
		
		Thread.sleep(Integer.parseInt(BaseClass.getData("wait2")));
		WebElement team = driver.findElement(BaseClass.getPageElement("homepage", "team"));
		Select teamSelect = new Select(team);
		teamSelect.selectByIndex(3);

		driver.findElement(BaseClass.getPageElement("homepage", "SRMradioBtn")).click();
		Thread.sleep(Integer.parseInt(BaseClass.getData("wait2")));
		WebElement SRMselect = driver.findElement(BaseClass.getPageElement("homepage", "SRMselect"));
		Select SRMselectSelect = new Select(SRMselect);
		SRMselectSelect.selectByIndex(2);

		
		
		Thread.sleep(Integer.parseInt(BaseClass.getData("wait2")));
		
		WebElement associate = driver.findElement(BaseClass.getPageElement("homepage", "associate"));
		Select associateSelect = new Select(associate);
		associateSelect.selectByIndex(2);
		
		WebElement rm = driver.findElement(BaseClass.getPageElement("homepage", "rm"));
		Select rmSelect = new Select(rm);
		rmSelect.selectByIndex(2);
		
		WebElement sco = driver.findElement(BaseClass.getPageElement("homepage", "sco"));
		Select scoSelect = new Select(sco);
		scoSelect.selectByIndex(2);
		
		
		driver.findElement(BaseClass.getPageElement("homepage", "create")).click();
		Reporter.log("Car package has been created successfully | ",true);
		
	}

	@BeforeMethod
	public void beforeMethod() {
		driver = BaseClass.loadDriver();
		driver.get(BaseClass.getData("url"));
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		
	}

	@AfterMethod
	public void afterMethod() throws Exception {
		driver.close();
		driver.quit();
	}

}
