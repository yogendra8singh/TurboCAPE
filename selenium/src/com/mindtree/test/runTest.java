package com.mindtree.test;

import org.testng.TestNG;

public class runTest {

	public static void main(String[] args) {
		TestNG testng = new TestNG();
        Class[] classes = new Class[]{NewTest.class};
        testng.setTestClasses(classes);
        testng.run();


	}

}
