#!/bin/sh

echo "installing developer-hub-ui..."
cd developer-hub-ui && npm ci && npm run build