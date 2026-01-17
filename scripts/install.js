#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Find the project root (where npm install was run)
function findProjectRoot() {
  // When running as postinstall, we're in node_modules/@jacklcl/claude-skill
  // We need to go up to find the project root
  let dir = process.cwd();

  // If we're in node_modules, go up to project root
  if (dir.includes('node_modules')) {
    const parts = dir.split('node_modules');
    dir = parts[0].replace(/[\/\\]$/, '');
  }

  return dir;
}

// Copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  const projectRoot = findProjectRoot();
  const packageDir = path.dirname(__dirname);

  const srcSkillsDir = path.join(packageDir, 'skills');
  const destClaudeDir = path.join(projectRoot, '.claude', 'skills');

  console.log('📦 Installing Jack\'s Claude Code Skill...');
  console.log(`   Project root: ${projectRoot}`);

  try {
    // Copy skills to .claude/skills
    copyDirSync(srcSkillsDir, destClaudeDir);

    console.log('✅ Skill installed successfully!');
    console.log(`   Location: ${destClaudeDir}/jack-dev-preferences/skill.md`);
    console.log('');
    console.log('🎉 Claude Code will now follow Jack\'s development preferences.');
  } catch (error) {
    console.error('❌ Failed to install skill:', error.message);
    process.exit(1);
  }
}

main();
