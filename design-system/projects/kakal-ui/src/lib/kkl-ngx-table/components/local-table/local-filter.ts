export function customFilterPredicate(data: any, myFilters): boolean {
  const filters = JSON.parse(myFilters);
  for (let i = 0; i < filters.length; i++) {
    if(!data[filters[i].key]) return false;
    switch (filters[i].controlType) {
      case 'dateRange':
        const dateStamp = (new Date(data[filters[i].key])).getTime();
        if(!(dateStamp > filters[i].val.start.setHours(0,0,0,0).getTime() && dateStamp < filters[i].val.end.setHours(23,59,59,999).getTime())){
          return false;
        }
        break;
      case 'select':
      case 'autocomplete':
        if(Array.isArray(data[filters[i].key])) {
          if(data[filters[i].key].some(a => a.label !== filters[i].val.label || JSON.stringify(a.value) === JSON.stringify(filters[i].val.value))) {
            break;
          } else {
            return false;
          }
        } else {
          if(data[filters[i].key].label !== filters[i].val.label || JSON.stringify(data[filters[i].key].value) != JSON.stringify(filters[i].val.value)) {
            return false;
          }
          break;
        }
      case 'date':
        const dateStamp1 = (new Date(data[filters[i].key])).setHours(0,0,0,0);
        const dateStamp2 = (new Date(filters[i].val)).getTime();
        if(dateStamp1 !== dateStamp2){
          return false;
        }
        break;
      default:
        const fitsThisFilter = data[filters[i].key].toString().toLowerCase().includes((filters[i].val).trim().toLowerCase());
        if (!fitsThisFilter) {
          return false;
        }
    }
  }
  return true;
}
