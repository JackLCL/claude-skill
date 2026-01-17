# @jacklcl/claude-skill

Jack 的 Claude Code 个人开发偏好 Skill。

安装后，Claude Code 会自动遵循以下开发规范。

## 开发偏好

| 项目 | 设置 |
|------|------|
| 沟通语言 | 中文 |
| 代码注释 | 英文 |
| Git commit | 英文 |
| 前端框架 | 视项目而定 |
| 后端技术栈 | 视项目而定 |
| 数据库 | 视项目而定 |
| 前端多端支持 | Web、桌面、移动端 |
| 代码质量 | 提交前需自行验证 |

## 安装

### 配置 GitHub Package Registry

首先配置 npm 使用 GitHub Package Registry：

```bash
# 创建或编辑 ~/.npmrc
echo "@jacklcl:registry=https://npm.pkg.github.com" >> ~/.npmrc
```

### 安装包

```bash
npm install @jacklcl/claude-skill --save-dev
```

安装后会自动将 Skill 复制到项目的 `.claude/skills/` 目录。

## 发布（维护者）

1. 登录 GitHub Package Registry：

```bash
npm login --registry=https://npm.pkg.github.com
# Username: JackLCL
# Password: 使用 GitHub Personal Access Token (需要 write:packages 权限)
```

2. 发布：

```bash
npm publish
```

## License

MIT
