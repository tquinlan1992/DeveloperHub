#!/bin/sh

echo "installing developer-hub-api..."
cd developer-hub-api && npm ci && npm run build