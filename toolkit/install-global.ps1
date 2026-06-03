# Dineline Elite Toolkit — Global Claude Code Installer
# Run from PowerShell. Installs the toolkit to %USERPROFILE%\.claude\ so it's
# available to every Claude Code session on this machine.
#
# Usage:
#   1. cd into the Dineline-Onboarding repo (where this script lives)
#   2. PowerShell:  .\toolkit\install-global.ps1
#   3. Restart any open Claude sessions

$ErrorActionPreference = "Stop"

$claudeDir = Join-Path $env:USERPROFILE ".claude"
$toolkitDir = Join-Path $claudeDir "toolkit"
$sourceDir = $PSScriptRoot

Write-Host ""
Write-Host "Dineline Elite Toolkit — Global Installer" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Create .claude folder if missing
if (-not (Test-Path $claudeDir)) {
    Write-Host "Creating $claudeDir..."
    New-Item -ItemType Directory -Path $claudeDir | Out-Null
}

# 2. Create toolkit subfolder
if (-not (Test-Path $toolkitDir)) {
    Write-Host "Creating $toolkitDir..."
    New-Item -ItemType Directory -Path $toolkitDir | Out-Null
}

# 3. Copy library files
$files = @("gsap.min.js", "ScrollTrigger.min.js", "lenis.min.js", "aceternity-vocabulary.md", "replicate-setup.md", "README.md")
foreach ($file in $files) {
    $src = Join-Path $sourceDir $file
    $dst = Join-Path $toolkitDir $file
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dst -Force
        Write-Host "  Copied $file"
    } else {
        Write-Warning "  Source missing: $src"
    }
}

# 4. Install global CLAUDE.md (with confirmation if one already exists)
$claudeMdSrc = Join-Path $sourceDir "CLAUDE.md.template"
$claudeMdDst = Join-Path $claudeDir "CLAUDE.md"

if (Test-Path $claudeMdDst) {
    Write-Host ""
    Write-Host "An existing CLAUDE.md was found at $claudeMdDst" -ForegroundColor Yellow
    $answer = Read-Host "Overwrite? (y/N)"
    if ($answer -eq "y") {
        Copy-Item -Path $claudeMdSrc -Destination $claudeMdDst -Force
        Write-Host "  Overwrote CLAUDE.md"
    } else {
        $backupDst = Join-Path $claudeDir "CLAUDE.dineline.md"
        Copy-Item -Path $claudeMdSrc -Destination $backupDst -Force
        Write-Host "  Saved to CLAUDE.dineline.md instead (you can merge manually)"
    }
} else {
    Copy-Item -Path $claudeMdSrc -Destination $claudeMdDst -Force
    Write-Host "  Installed CLAUDE.md"
}

Write-Host ""
Write-Host "Done." -ForegroundColor Green
Write-Host ""
Write-Host "Installed to:" -ForegroundColor Cyan
Write-Host "  $claudeDir\CLAUDE.md"
Write-Host "  $toolkitDir\"
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Restart any open Claude Code sessions (the new CLAUDE.md loads at session start)"
Write-Host "  2. (Optional) Set up Replicate API: see toolkit\replicate-setup.md"
Write-Host "  3. In any project, ask Claude to 'use the elite toolkit' — it'll know what that means"
Write-Host ""
