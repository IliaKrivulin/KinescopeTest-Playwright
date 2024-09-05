// @ts-nocheck

import { test, expect } from '@playwright/test';

test('Token test', async ({ page }) => {
    // Локаторы
    const mailInputField = 'Work email'; //поле "Почта"
    const passwordInputField = 'Password'; //поле "Пароль"
    const tokenTextLocator = 'div._1xspbv5 > div._1bdq89a._1sw6t2s > div._1xiwm8f._1w45odf.column__left.false.false > div._14h9chf > div[style="--v1o16zda_2: 14px; --v1o16zda_3: 21px; --v1o16zda_4: #111111;"]'; //текст названия токена
    const videoTextLocator = 'div._216pqc > div._19d8x2k'; // текст видео
    const loginButton = 'button._1wlk9xf_e93ein.primary.medium' //кнопка "Войти"
    const newToken = 'button._nx1rfy._djcgxs._11mzpns._66v09m._aoryu9' //кнопка "Новый токен"
    const tokenNameInputField = 'input._18e59hr._18946ds.undefined' //Поле ввода названия токена
    const checkboxUploadFiles = 'div._tl66x3 > div._1upu3gu_e93ein._fydy30:nth-child(4) > svg' //чекбокс "Загружать файлы"
    const createButton = 'input._18e59hr._18946ds.undefined' //кнопка "Создать"
    // Авторизация
    await page.goto('https://app.kinescope.io/workspace/api_token');
    await page.getByPlaceholder(mailInputField).click();
    await page.getByPlaceholder(mailInputField).fill('fcz-sbg@mail.ru');
    await page.getByPlaceholder(passwordInputField).click();
    await page.getByPlaceholder(passwordInputField).fill('TestTest2024');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    // создание токена
    await page.getByRole('button', { name: 'Новый токен' }).click();
    await page.getByPlaceholder('Введите название токена').click();
    await page.getByPlaceholder('Введите название токена').fill('TestToken');
    await page.locator('div:nth-child(4) > svg > rect').first().click();
    await page.getByRole('button', { name: 'Создать' }).click();
    // Проверка тескта токена
    const tokenLocator = page.locator(tokenTextLocator);
    await expect(tokenLocator).toBeVisible(); 
    await expect(tokenLocator).toContainText('TestToken');
    // Загрузка видео
    await page.locator('._1y10fej').first().click();
    await page.getByRole('button', { name: 'Новый' }).click();
    await page.getByRole('button', { name: 'Загрузить по ссылке' }).click();
    await page.getByPlaceholder('Введите URL').click();
    await page.getByPlaceholder('Введите URL').fill('https://www.youtube.com/watch?v=c9DIoSNoQNs');
    await page.getByRole('button', { name: 'Загрузить', exact: true }).click();
    // Проверка текста видео
    const videoLocator = page.locator(videoTextLocator);
    await page.waitForSelector(videoTextLocator, { state: 'visible' });
    await expect(videoLocator).toContainText('Природа HD Качество \\ Короткое Видео');
});