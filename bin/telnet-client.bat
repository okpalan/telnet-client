@echo off

echo This is a telnet client implementation.
echo It can be used to connect to a host and execute commands.
echo.
echo Usage:
echo telnet-client [host] [port]
echo.
echo Options:
echo -h, --help       Show this help message and exit.
echo -v, --version    Show the version and exit.
echo.

if "%1" == "-h" (
  exit 0
)

if "%1" == "--help" (
  exit 0
)

if "%1" == "-v" (
  echo 1.0.0
  exit 0
)

if "%1" == "--version" (
  echo 1.0.0
  exit 0
)

if "%1" == "" (
  echo Error: host and port must be specified.
  exit 1
)

if "%2" == "" (
  echo Error: host and port must be specified.
  exit 1
)
