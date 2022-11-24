import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/registrousuario');
  }

  async getTest1(): Promise<string>{
    return element(by.css('app-root h4')).getText();
  }

  async getTest2(): Promise<string>{
    return element(by.css('app-root ion-button')).getText();
  }

  async getTest3(): Promise<string>{
    return element(by.css('app-root ion-label')).getText();
  }

  async getTest4(): Promise<string>{
    return element(by.css('app-root h3')).getText();
  }

  async getTest5(): Promise<string>{
    return element(by.css('app-root h2')).getText();
  }


}


