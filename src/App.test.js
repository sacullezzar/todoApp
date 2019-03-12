import React from 'react'
import puppeteer from 'puppeteer'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import App from './App'
import TodoForm from './components/TodoForm'


let sandbox
describe('My Todo App', () => {
  let app
  beforeEach(() => {
    app = shallow(<App />)
    sandbox = sinon.createSandbox()
  })
  afterEach(() => {
    sandbox.restore()
  })
  it('renders a title', () => {
    expect(app.find('.title').text()).toEqual('My ToDo App')
  })
  it('has a form component', () => {
    expect(app.find('TodoForm').length).toBe(1)
  })
  it('has a list component', () => {
    expect(app.find('TodoList').length).toBe(1)
  })
})

describe('Todo Form', () => {
  let form
  beforeEach(() => {
    form = shallow(<TodoForm />)
    sandbox = sinon.createSandbox()
  })
  afterEach(() => {
    sandbox.restore()
  })
  it('has a text input', () => {
    expect(form.find('#todo-text').length).toBe(1)
  })
  it('has a submit button', () => {
    expect(form.find('#todo-submit').length).toBe(1)
  })
})

describe('Todo List', () => {
  let app
  beforeEach(() => {
    app = shallow(<App />)
    sandbox = sinon.createSandbox()
    app.setState({ list: ['a thing', 'another thing', 'a third thing'] })
  })
  afterEach(() => {
    sandbox.restore()
  })
  it('shows a complete button for each list item', () => {
    expect(app.find('TodoList').dive().find('#todo-list').find('button.todo-complete').length).toBe(3)
  })
})

describe('Features', () => {
  let page
  let browser
  let list
  let listItem
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
    });
    page = await browser.newPage();
  })
  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })
  afterAll(() => {
    browser.close()
  })
  it('takes a text input as a new todo', async () => {
    await page.waitForSelector('#todo-submit');
    await page.click("input[id=todo-text]");
    await page.type("input[id=todo-text]", 'a thing I must do');
    await page.click("input[id=todo-submit]");
    await page.waitForSelector("#todo-list");
    listItem = await page.$eval('.todo-item', el => (el ? true: false))
    list = await page.$$eval('li', lis => lis.length)
    expect(listItem).toBe(true)
    expect(list).toBe(1)
  });

  it('displays more than one todo item', async () => {
    await page.waitForSelector('#todo-submit');
    await page.click("input[id=todo-text]");
    await page.type("input[id=todo-text]", 'a thing I must do');
    await page.click("input[id=todo-submit]");
    await page.click("input[id=todo-text]");
    await page.type("input[id=todo-text]", 'another thing to do');
    await page.click("input[id=todo-submit]");
    await page.waitForSelector("#todo-list");
    list = await page.$$eval('li', lis => lis.length)
    expect(list).toBe(2)
  }) 

  it('removes an item from the list', async () => {
    await page.waitForSelector('#todo-submit');
    await page.click("input[id=todo-text]");
    await page.type("input[id=todo-text]", 'a thing I must do');
    await page.click("input[id=todo-submit]");
    await page.waitForSelector('#todo-submit');
    await page.click("input[id=todo-text]");
    await page.type("input[id=todo-text]", 'another thing to do');
    await page.click("input[id=todo-submit]");
    await page.click(".todo-complete");
    list = await page.$$eval('li', lis => lis.length)
    expect(list).toBe(1)
  })
})