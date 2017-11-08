export let config = {
  id: 'BY_LAST_NAME',
  title: 'Person by country',
  type: 'column',
  aggregation: {
    by: 'name',
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
