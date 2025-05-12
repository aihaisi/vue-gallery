// backend/server.ts
import puppeteer from 'puppeteer';
import express from 'express';

const app = express();

app.get('/api/pixiv-artwork', async (req, res) => {
  const { id } = req.query;
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(`https://www.pixiv.net/artworks/${id}`, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // 获取页面数据（需根据实际DOM结构调整）
    const data = await page.evaluate(() => {
      return document.querySelector('pre#meta-preload')?.innerHTML;
    });

    res.send(JSON.parse(data || '{}'));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch via browser' });
  } finally {
    await browser.close();
  }
});

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001'); // 确认此日志输出
  });