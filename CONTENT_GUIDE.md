

# 📝 网站内容管理指南


---

## 📁 网站目录结构

```
JunzheLin.github.io/
├── index.html          # 首页
├── about.html          # 关于我页面
├── blog/               # 博客文章目录
│   ├── aws-ec2-beginner.html
│   └── ...
├── css/
│   └── style.css       # 样式文件
└── js/
    └── main.js         # JavaScript 脚本
```

---

## ➕ 如何添加新文章

### 方法一：直接编辑 HTML（当前方式）

1. 复制现有的博客文件：
   ```bash
   cp blog/aws-ec2-beginner.html blog/你的新文章.html
   ```

2. 编辑新文件，修改以下内容：
   - `<title>` 标题
   - `<h1>` 文章标题
   - 正文内容
   - `<span class="post-category">` 分类标签
   - 日期和作者信息

3. 在首页 `index.html` 中添加文章链接：
   ```html
   <article class="post-card">
       <span class="post-category">分类名</span>
       <h3><a href="blog/你的新文章.html">文章标题</a></h3>
       <p>文章摘要...</p>
       <div class="post-meta">
           <span>📅 2026-03-13</span>
           <span>👤 Junzhe Lin</span>
       </div>
   </article>
   ```

---

### 方法二：使用 Markdown（推荐）

如果你更喜欢用 Markdown 写文章，可以按照以下步骤：

#### 1. 安装 Markdown 转换工具

```bash
# 安装 Node.js 和 npm（如果还没有）
# 然后安装 marked 库
npm install marked
```

#### 2. 创建转换脚本 `md2html.js`

```javascript
const fs = require('fs');
const { marked } = require('marked');

// 读取 Markdown 文件
const mdFile = process.argv[2];
const mdContent = fs.readFileSync(mdFile, 'utf-8');

// 转换为 HTML
const htmlContent = marked(mdContent);

// 生成完整的博客页面模板
const template = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${mdFile.replace('.md', '')}</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body data-page="blog">
    <nav class="navbar">
        <div class="nav-container">
            <a href="/" class="logo">Junzhe Lin</a>
            <div class="nav-menu">
                <ul class="nav-links">
                    <li><a href="/">首页</a></li>
                    <li><a href="#" class="active">技术博客</a></li>
                    <li><a href="/about.html">关于我</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <article class="blog-post">
        ${htmlContent}
    </article>

    <footer class="footer">
        <p>© 2026 Junzhe Lin. All rights reserved.</p>
    </footer>

    <script src="/js/main.js"></script>
</body>
</html>`;

// 输出 HTML 文件
fs.writeFileSync(mdFile.replace('.md', '.html'), template);
console.log('转换完成！');
```

#### 3. 使用方法

```bash
# 将 Markdown 转换为 HTML
node md2html.js my-article.md
```

---

## ✏️ 如何修改现有文章

1. 找到对应的 HTML 文件（如 `blog/aws-ec2-beginner.html`）
2. 用任意文本编辑器打开
3. 修改内容后保存
4. 提交更改到 GitHub

---

## 🗑️ 如何删除文章

1. 删除博客文件：
   ```bash
   rm blog/要删除的文章.html
   ```

2. 从首页 `index.html` 中移除对应的文章链接

3. 从导航菜单中移除（如果需要）

---

## 🎨 文章分类标签

在文章中使用以下分类：

| 分类 | 标签 |
|------|------|
| AWS | `<span class="post-category">AWS</span>` |
| 云计算 | `<span class="post-category">云计算</span>` |
| 编程 | `<span class="post-category">编程</span>` |
| DevOps | `<span class="post-category">DevOps</span>` |

---

## 🚀 提交更改到 GitHub

每次修改完成后，执行以下命令：

```bash
# 1. 添加所有更改
git add .

# 2. 提交更改（写清楚修改了什么）
git commit -m "添加新文章：xxx"

# 3. 推送到 GitHub
git push origin master
```

GitHub Pages 会自动更新，通常需要 1-2 分钟生效。

---

## 📋 常用命令速查

| 操作 | 命令 |
|------|------|
| 查看状态 | `git status` |
| 查看历史 | `git log --oneline` |
| 拉取最新 | `git pull` |
| 推送代码 | `git push` |

---

## ❓ 常见问题

**Q: 文章显示 404？**
A: 检查链接路径是否正确，确保文件在 `blog/` 目录下。

**Q: 样式丢失？**
A: 确保 HTML 文件中的 CSS 路径正确（`../css/style.css`）。

**Q: GitHub Pages 没更新？**
A: 等待 1-2 分钟，然后按 Ctrl+Shift+R 强制刷新缓存。

---
