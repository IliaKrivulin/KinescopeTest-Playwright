// @ts-nocheck

import { test, expect } from '@playwright/test';

test('Token test', async ({ page }) => {

const mailInputField = 'Work email' //поле "Почта"
const passwordInputField = 'Password' //поле "Пароль"
const loginButton = 'button._1wlk9xf_e93ein.primary.medium' //кнопка "Войти"
const newToken = 'button._nx1rfy._djcgxs._11mzpns._66v09m._aoryu9' //кнопка "Новый токен"
const tokenNameInputField = 'input._18e59hr._18946ds.undefined' //Поле ввода названия токена
const checkboxUploadFiles = 'div._tl66x3 > div._1upu3gu_e93ein._fydy30:nth-child(4) > svg' //чекбокс "Загружать файлы"
const createButton = 'input._18e59hr._18946ds.undefined' //кнопка "Создать"
const tokenText = 'div._eg0904:nth-of-type(1)' //текст названия токена


await page.goto('https://app.kinescope.io/workspace/api_token');
await page.getByPlaceholder('Work email').click();
await page.getByPlaceholder('Work email').fill('fcz-sbg@mail.ru');
await page.getByPlaceholder('Password').click();
await page.getByPlaceholder('Password').fill('TestTest2024');
await page.getByRole('button', { name: 'Sign in', exact: true }).click();
await page.getByRole('button', { name: 'Новый токен' }).click();
await page.getByPlaceholder('Введите название токена').click();
await page.getByPlaceholder('Введите название токена').fill('TestToken');
await page.locator('div:nth-child(4) > svg > rect').first().click();
await page.getByRole('button', { name: 'Создать' }).click();
/*
await page.getByPlaceholder(mailInputField).click();
await page.getByPlaceholder(mailInputField).fill('fcz-sbg@mail.ru');
await page.getByPlaceholder(passwordInputField).click();
await page.getByPlaceholder(passwordInputField).fill('TestTest2024');
await page.getByPlaceholder(loginButton).click();
await page.getByPlaceholder(newToken).click();
await page.getByPlaceholder(tokenNameInputFiel).click();
await page.getByPlaceholder(tokenNameInputFiel).fill('TestToken');
await page.getByPlaceholder(checkboxUploadFiles).check();
await page.getByPlaceholder(createButton).click();
expect(tokenText).toContainText('TestToken')
*/
});