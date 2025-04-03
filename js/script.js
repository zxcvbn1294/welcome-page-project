// 等待文档加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取切换主题按钮
    const themeButton = document.getElementById('changeThemeBtn');
    
    // 添加点击事件监听器
    themeButton.addEventListener('click', function() {
        // 切换深色/浅色模式
        document.body.classList.toggle('dark-mode');
        
        // 更改按钮文本
        if (document.body.classList.contains('dark-mode')) {
            themeButton.textContent = '切换到浅色模式';
            // 保存用户偏好到本地存储
            localStorage.setItem('theme', 'dark');
        } else {
            themeButton.textContent = '切换到深色模式';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // 检查用户之前的主题偏好
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeButton.textContent = '切换到浅色模式';
    } else {
        themeButton.textContent = '切换到深色模式';
    }
    
    // 添加简单的欢迎动画
    const welcomeCard = document.querySelector('.welcome-card');
    welcomeCard.style.opacity = '0';
    welcomeCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        welcomeCard.style.opacity = '1';
        welcomeCard.style.transform = 'translateY(0)';
    }, 200);
    
    // 创建一个简单的打字效果
    const heading = document.querySelector('h1');
    const originalText = heading.textContent;
    heading.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heading.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    typeWriter();
});