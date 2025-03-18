let chart = echarts.init(
  null,
  input.theme,
  {
    renderer: 'svg',
    ssr: true,
    width: input.width,
    height: input.height
  });
chart.setOption({ animation: false, progressive: 0 });
chart.setOption(input.chart);

let svg = chart.renderToSVGString();

export let output = {
  svg: svg
};