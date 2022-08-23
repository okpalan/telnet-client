#!/usr/bin/env sh

echo "This is a telnet client implementation."
echo "It can be used to connect to a host and execute commands."
echo ""
echo "Usage:"
echo "telnet-client [host] [port]"
echo ""
echo "Options:"
echo "-h, --help       Show this help message and exit."
echo "-v, --version    Show the version and exit."
echo ""

if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
  exit 0
fi

if [ "$1" = "-v" ] || [ "$1" = "--version" ]; then
  echo "1.0.0"
  exit 0
fi

if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Error: host and port must be specified." >&2
  exit 1
fi

node ./node_modules/telnet-client/telnet-client.js "$1" "$2"
