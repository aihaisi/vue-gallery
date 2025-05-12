import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3001;

// 允许跨域请求（开发环境可以放宽限制）
app.use(cors());

// 代理路由：访问 manhuabika.com
app.get('/api/manhuabika', async (req, res) => {
  try {
    const { path } = req.query; 
    const response = await axios.get(`https://manhuabika.com/pchapter/${path}`, {
      headers: {
        // 模拟浏览器请求头，避免被拦截
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://manhuabika.com/',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
      },
    });

    // 返回网页内容（如果是API，可能需要解析JSON）
    res.send(response.data);
  } catch (error: any) {
    console.error('Proxy error:', error.message);
    res.status(500).json({ 
      error: 'Failed to fetch data from manhuabika.com',
      details: error.response?.data || 'No additional error info',
    });
  }
});

app.get('/api/jm', async (req, res) => {
    try {
      const { id } = req.query; 
      const response = await axios.get(`https://18comic.vip/photo/${id}`, {
        headers: {
          // 模拟浏览器请求头，避免被拦截
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://18comic.vip/',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        },
      });
  
      // 返回网页内容（如果是API，可能需要解析JSON）
      res.send(response.data);
    } catch (error: any) {
      console.error('Proxy error:', error.message);
      res.status(500).json({ 
        error: 'Failed to fetch data from jm.com',
        details: error.response?.data || 'No additional error info',
      });
    }
  });

// 启动服务器
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});