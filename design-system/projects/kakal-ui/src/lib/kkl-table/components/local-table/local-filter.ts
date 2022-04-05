export function customFilterPredicate(data: any, myFilters): boolean {
  const filters = JSON.parse(myFilters);
  for (let i = 0; i < filters.length; i++) {
    if(!data[filters[i].key]) return false;
    switch (filters[i].controlType) {
      case 'dateRange':
        var dateStamp = (new Date(data[filters[i].key])).getTime();
        if(!(dateStamp > filters[i].val.start.setHours(0,0,0,0) && dateStamp < filters[i].val.end.setHours(23,59,59,999))){
          return false;
        }
        break;
      case 'select':
        if (data[filters[i].key] != filters[i].val) {
          return false;
        }
        break;
      case 'multiSelect':
        if (data[filters[i].key].some(a => a === filters[i].val)) {
          break;
        } else {
          return false;
        }
      case 'autocomplete':
        if(Array.isArray(data[filters[i].key])) {
          if (data[filters[i].key].some(a => a === filters[i].val)) {
            break;
          } else {
            return false;
          }
        } else {
          if (data[filters[i].key] == filters[i].val) {
            return false;
          }
          break;
        }
      case 'date':
        var dateStamp = (new Date(data[filters[i].key])).getTime();
        if(dateStamp !== filters[i].val.setHours(0,0,0,0)){
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
