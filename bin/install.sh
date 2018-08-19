#!/bin/sh

DIR="$(cd "$(dirname "$0")" && pwd)"

$DIR/install-tquinlan92-webpack-utils.sh && \

$DIR/install-tquinlan92-typescript-redux-utils.sh && \

$DIR/install-tquinlan92-material-core-ui.sh && \

$DIR/install-developer-hub-headless.sh && \
$DIR/install-developer-hub-ui.sh && \

$DIR/install-storybook.sh && \

$DIR/install-developer-hub-api.sh