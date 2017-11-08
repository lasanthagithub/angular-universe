export let config = {
  id: 'BY_LANGUAGE',
  title: 'Person by Language',
  type: 'column',
  aggregation: {
    by: 'language',
    reducer: 'Count'
  },
  dataLabels: false,
  yAxisTitle: 'Total Person',
  showStackedLabels: true,
  sortBy: {
    by: 'VALUE',
    direction: 'DESC'
  },
  info: {
      title: "Test"
  }
};
