// @ts-nocheck

import { test, expect } from '@playwright/test';

test('Token test', async ({ page }) => {
    
    const locators = {
        mailInputField: 'Work email', 
        passwordInputField: 'Password', 
        tokenTextLocator: 'div._1xspbv5 > div._1bdq89a._1sw6t2s > div._1xiwm8f._1w45odf.column__left.false.false > div._14h9chf > div[style="--v1o16zda_2: 14px; --v1o16zda_3: 21px; --v1o16zda_4: #111111;"]',
        videoTextLocator: 'div._216pqc > div._19d8x2k', 
        loginButton: 'button._1wlk9xf_e93ein.primary.medium', 
        newTokenButton: 'button._nx1rfy._djcgxs._11mzpns._66v09m._aoryu9', 
        tokenNameInputField: 'input._18e59hr._18946ds.undefined', 
        checkboxUploadFiles: 'div._tl66x3 > div._1upu3gu_e93ein._fydy30:nth-child(4) > svg', 
        createButton: 'input._18e59hr._18946ds.undefined',
        urlInputField: 'Введите URL'
    };

    // Авторизация
    await page.goto('https://app.kinescope.io/workspace/api_token');
    await page.getByPlaceholder(locators.mailInputField).fill('fcz-sbg@mail.ru');
    await page.getByPlaceholder(locators.passwordInputField).fill('TestTest2024');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();

    // Создание токена
    await page.getByRole('button', { name: 'Новый токен' }).click();
    await page.getByPlaceholder('Введите название токена').fill('TestToken');
    await page.locator('div:nth-child(4) > svg > rect').first().click();
    await page.getByRole('button', { name: 'Создать' }).click();

    // Проверка текста токена
    const tokenLocator = page.locator(locators.tokenTextLocator);
    await expect(tokenLocator).toBeVisible();
    await expect(tokenLocator).toContainText('TestToken');

    // Загрузка видео
    await page.locator('._1y10fej').first().click();
    await page.getByRole('button', { name: 'Новый' }).click();
    await page.getByRole('button', { name: 'Загрузить по ссылке' }).click();
    await page.getByPlaceholder(locators.urlInputField).fill('https://www.youtube.com/watch?v=c9DIoSNoQNs');
    await page.getByRole('button', { name: 'Загрузить', exact: true }).click();

    // Проверка текста видео
    const videoLocator = page.locator(locators.videoTextLocator);
    await expect(videoLocator).toContainText('Природа HD Качество \\ Короткое Видео');
});