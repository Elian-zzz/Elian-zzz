#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
cd /home/Debian/PROYECTOS/Elian-zzz
export PNPM_HOME="/home/Debian/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"
pnpm add -D @tailwindcss/vite
pnpm dev --host
