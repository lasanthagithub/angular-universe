export let config = {
  id: 'BY_COUNTRY',
  title: 'Person by country',
  type: 'column',
  aggregation: {
    by: 'country',
    reducer: 'Count',
    stackBy: 'gender'
  },
  dataLabels: false,
  yAxisTitle: 'Total Person',
  showStackedLabels: true,
  sortBy: {
    by: 'VALUE',
    direction: 'DESC'
  },
top: {
    value: 50,
    by: 'VALUE'
}
};
