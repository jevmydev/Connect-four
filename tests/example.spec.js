import { test, expect } from "@playwright/test";

const LOCALHOST_URL = "http://localhost:4000/";

test("app shows the title connect four", async ({ page }) => {
    await page.goto(LOCALHOST_URL);

    const title = page.getByTestId("title");
    const textContent = await title.textContent();

    expect(textContent).toStrictEqual("Connect Four");
});

test("app shows the board game", async ({ page }) => {
    await page.goto(LOCALHOST_URL);

    const board = page.getByTestId("board");
    const boardInner = await board.innerHTML();

    expect(boardInner.length).toBeGreaterThan(0);
});
