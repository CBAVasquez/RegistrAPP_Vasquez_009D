import { AppPage } from './app.po';


describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Test 1', async () => {
    await page.navigateTo();
    expect(await page.getTest1()).toEqual('Registrar Usuario');
  });

  it('Test 2', async () => {
    await page.navigateTo();
    expect(await page.getTest2()).toEqual('VOLVER');
  });

  it('Test 3', async () => {
    await page.navigateTo();
    expect(await page.getTest3()).toEqual('Nombre:');
  });

  it('Test 4', async () => {
    await page.navigateTo();
    expect(await page.getTest4()).toEqual('Completar los datos');
  });

  it('Test 5', async () => {
    await page.navigateTo();
    expect(await page.getTest5()).toEqual('Muchas Gracias!');
  });





});

