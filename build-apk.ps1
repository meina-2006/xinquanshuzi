 # 心泉数字心理学 Android APK 打包脚本
 # 使用前请确保已安装：
 # 1. Java JDK 17+ (https://adoptium.net/)
 # 2. Android Studio + Android SDK 34
 # 3. 设置环境变量 JAVA_HOME 和 ANDROID_HOME
 
 Write-Host "========================================" -ForegroundColor Magenta
 Write-Host "  心泉数字心理学 · Android APK 打包" -ForegroundColor Magenta
 Write-Host "========================================" -ForegroundColor Magenta
 Write-Host ""
 
 # 检查依赖
 $javaOk = $false
 try { java -version 2>&1 | Out-Null; $javaOk = $true } catch {}
 if (-not $javaOk) {
     Write-Host "❌ 未找到 Java！请安装 JDK 17+ 并设置 JAVA_HOME" -ForegroundColor Red
     Write-Host "   下载: https://adoptium.net/" -ForegroundColor Yellow
     exit 1
 }
 Write-Host "✅ Java 已安装" -ForegroundColor Green
 
 # 1. 构建 Web 应用
 Write-Host ""
 Write-Host "📦 步骤 1/4: 构建 Web 应用..." -ForegroundColor Cyan
 npm.cmd run build
 if ($LASTEXITCODE -ne 0) {
     Write-Host "❌ Web 构建失败！" -ForegroundColor Red
     exit 1
 }
 Write-Host "✅ Web 构建完成" -ForegroundColor Green
 
 # 2. 同步 Capacitor
 Write-Host ""
 Write-Host "📱 步骤 2/4: 同步 Capacitor..." -ForegroundColor Cyan
 npx.cmd cap sync android
 if ($LASTEXITCODE -ne 0) {
     Write-Host "⚠️ 同步可能不完整，继续尝试..." -ForegroundColor Yellow
 }
 Write-Host "✅ Capacitor 同步完成" -ForegroundColor Green
 
 # 3. 构建 APK
 Write-Host ""
 Write-Host "🔨 步骤 3/4: 构建 Android APK (debug)..." -ForegroundColor Cyan
 cd android
 ./gradlew assembleDebug
 if ($LASTEXITCODE -ne 0) {
     Write-Host "❌ APK 构建失败！" -ForegroundColor Red
     cd ..
     exit 1
 }
 cd ..
 Write-Host "✅ APK 构建完成" -ForegroundColor Green
 
 # 4. 输出 APK 路径
 Write-Host ""
 Write-Host "========================================" -ForegroundColor Magenta
 Write-Host "🎉 打包成功！APK 文件路径:" -ForegroundColor Magenta
 Write-Host "   android/app/build/outputs/apk/debug/app-debug.apk" -ForegroundColor White
 Write-Host "========================================" -ForegroundColor Magenta
 Write-Host ""
 Write-Host "💡 提示:" -ForegroundColor Yellow
 Write-Host "   将 APK 文件传输到安卓手机，打开即可安装。" -ForegroundColor Yellow
 Write-Host "   如需发布到应用商店，请使用 release 签名构建：" -ForegroundColor Yellow
 Write-Host "   > cd android && ./gradlew assembleRelease" -ForegroundColor Yellow
