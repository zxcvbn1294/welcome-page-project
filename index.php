<?php
// 简单的PHP变量
$welcome_message = "欢迎来到我的网站";
$current_time = date("Y-m-d H:i:s");
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>欢迎页面</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1><?php echo $welcome_message; ?></h1>
        </header>
        
        <main>
            <section class="welcome-section">
                <div class="welcome-card">
                    <h2>感谢访问</h2>
                    <p>这是一个使用HTML、CSS、JavaScript和PHP创建的基础欢迎界面。</p>
                    <p>当前时间: <?php echo $current_time; ?></p>
                    <button id="changeThemeBtn">切换主题</button>
                </div>
            </section>
        </main>
        
        <footer>
            <p>&copy; <?php echo date("Y"); ?> 我的网站. 保留所有权利.</p>
        </footer>
    </div>

    <script src="js/script.js"></script>
</body>
</html>