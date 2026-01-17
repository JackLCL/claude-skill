# Jack 的开发偏好 Skill

这是 Jack 的个人开发偏好配置，请在所有项目中遵循以下规范。

## 沟通语言

- **与用户沟通时使用中文**
- 代码注释使用英文
- Git commit message 使用英文

## 前端开发规范

### 多端支持

所有前端项目必须考虑多端兼容性：

- **Web 端**：桌面浏览器
- **桌面端**：可使用 Electron、Tauri 等方案
- **移动端**：响应式设计或 React Native、Flutter 等方案

在开始前端项目时，需要与用户确认具体的多端实现方案。

### 技术栈

前端框架不固定，视项目需求而定。开始项目前需与用户确认使用的框架（React、Vue、Next.js、Nuxt.js 等）。

## 后端开发规范

### 技术栈

后端技术栈不固定，视项目需求而定。开始项目前需与用户确认：

- 编程语言和框架（Node.js、Python、Go、Java 等）
- 数据库选型（PostgreSQL、MySQL、MongoDB 等）

## 代码质量

### 提交前验证

**重要**：所有代码在提交给用户测试验证之前，必须先自行验证确保没有问题：

1. 代码能够正常编译/运行
2. 基本功能测试通过
3. 没有明显的语法错误或逻辑问题
4. 如有测试用例，确保测试通过

### Git 提交规范

Commit message 格式：

```
<type>: <description>

Generated with [Claude Code](https://claude.ai/code)
via [Happy](https://happy.engineering)

Co-Authored-By: Claude <noreply@anthropic.com>
Co-Authored-By: Happy <yesreply@happy.engineering>
```

常用 type：
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建/工具相关
