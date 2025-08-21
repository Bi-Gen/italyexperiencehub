#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function execCommand(command, description) {
  try {
    log(`📝 ${description}...`, 'blue');
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    if (output.trim()) {
      console.log(output.trim());
    }
    log(`✅ ${description} completed`, 'green');
    return true;
  } catch (error) {
    log(`❌ Error during ${description}:`, 'red');
    console.error(error.message);
    return false;
  }
}

function main() {
  const commitMessage = process.argv[2] || `Auto-deploy: Updates ${new Date().toISOString().split('T')[0]}`;
  
  log(`🚀 Starting deployment process...`, 'bold');
  log(`📝 Commit message: "${commitMessage}"`, 'yellow');
  
  // Check if there are changes to commit
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (!status.trim()) {
      log('ℹ️  No changes to commit. Exiting.', 'yellow');
      return;
    }
  } catch (error) {
    log('❌ Error checking git status:', 'red');
    console.error(error.message);
    return;
  }
  
  // Build the project
  if (!execCommand('npm run build', 'Building project')) {
    log('❌ Build failed. Deployment aborted.', 'red');
    return;
  }
  
  // Git operations
  if (!execCommand('git add .', 'Staging changes')) return;
  
  if (!execCommand(`git commit -m "${commitMessage}"`, 'Creating commit')) return;
  
  if (!execCommand('git push origin main', 'Pushing to GitHub/Vercel')) return;
  
  log('🎉 Deployment completed successfully!', 'green');
  log('🌐 Your site will be live on Vercel in a few minutes.', 'blue');
  log('📊 Check deployment status at: https://vercel.com/dashboard', 'blue');
}

// Run the deployment
main();