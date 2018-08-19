#!/bin/sh

echo "installing storybook..."
cd storybook && npm ci && npm run build