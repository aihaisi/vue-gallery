@echo off
setlocal

REM 启动 Vite 开发服务器
start cmd /k "npm run dev"

REM 等待一段时间以确保服务器启动
timeout /t 2

REM 获取默认端口（通常是 3000 或 5173）
set PORT=3467

REM 打开默认浏览器访问项目
start http://localhost:%PORT%

endlocal
