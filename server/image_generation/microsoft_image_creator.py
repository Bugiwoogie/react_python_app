from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time


def generate_image(prompt):
    try:
        # Navigate to the Bing Image Creator page
        driver.get('https://www.bing.com/images/create?FORM=GENILP')

        # Find the input field and enter the prompt
        input_field = driver.find_element(By.NAME, 'prompt')  # Adjust the selector as needed
        input_field.send_keys(prompt)

        # Find and click the generate button
        generate_button = driver.find_element(By.ID, 'generate-button')  # Adjust the selector as needed
        generate_button.click()

        # Wait for the image to be generated
        time.sleep(10)  # Adjust the sleep time as needed

        # Find the generated image and get its URL
        image_element = driver.find_element(By.ID, 'generated-image')  # Adjust the selector as needed
        image_url = image_element.get_attribute('src')

        print('Generated image URL:', image_url)
    finally:
        # Close the browser
        driver.quit()