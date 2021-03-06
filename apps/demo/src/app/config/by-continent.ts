export let config = {
  id: 'BY_CONTINENT',
  title: 'Person by country',
  type: 'column',
  aggregation: {
    by: 'continent',
    reducer: 'Count',
    stackBy: 'gender'
  },
  dataLabels: false,
  yAxisTitle: 'Total Person',
  showStackedLabels: true,
  sortBy: {
    by: 'VALUE',
    direction: 'DESC'
  }
};
