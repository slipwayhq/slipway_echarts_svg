publisher := "slipway"
name := "echarts_svg"

build:
  rm -rf artifacts
  mkdir -p artifacts/{{publisher}}.{{name}}
  cp -r component/* artifacts/{{publisher}}.{{name}}
  slipway package artifacts/{{publisher}}.{{name}}

