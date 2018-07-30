#!/bin/sh

echo "installing developer-hub-headless..."
cd developer-hub-headless && npm ci && npm run build