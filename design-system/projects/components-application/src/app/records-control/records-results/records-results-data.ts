import { SelectOption } from "../../../../../kakal-ui/src/public-api";

export const RECORDS_RESULT_TABLE = [
  {
    caseId: 1,
    estateDetails: 'פרטים',
    dealName: '',
    date: new Date(),
    timeToDo: '',
    status: { label: 'status', authorizedBars: 4, totalBars: 8 },
    action: { label: 'חיתום דגיטלי', path: 'case' },
  },
  {
    caseId: 2,
    estateDetails: 'פרטים',
    dealName: '',
    date: new Date(),
    timeToDo: '',
    status: { label: 'status', authorizedBars: 4, totalBars: 8 },
    action: { label: 'רישום מקוון', path: 'payments' },
  },
  {
    caseId: 3,
    estateDetails: 'פרטים',
    dealName: '',
    date: new Date(),
    timeToDo: '',
    status: { label: 'status', authorizedBars: 4, totalBars: 8 },
    action: null,
  },
  {
    caseId: 4,
    estateDetails: 'פרטים',
    dealName: '',
    date: new Date(),
    timeToDo: '',
    status: { label: 'status', authorizedBars: 4, totalBars: 8 },
    action: { label: 'שלח בקשה', path: 'register' },
  },
];

export const ESTATE_DETAILS = [
  {
    gush: 1,
    division: 5,
    address: 'Plaunch',
    sellers: 'aplaunch0@diigo.com',
    agent: 'Vagram',
  },
  {
    gush: 2,
    division: 5,
    address: 'Dady',
    sellers: 'ndady1@latimes.com',
    agent: 'Tempsoft',
  },
  {
    gush: 3,
    division: 5,
    address: 'Adran',
    sellers: 'cadran2@samsung.com',
    agent: null,
  },
  {
    gush: 4,
    division: 5,
    address: 'Beneix',
    sellers: 'sbeneix3@sphinn.com',
    agent: 'Y-find',
  },
];

export const OPTIONS: SelectOption[] = [
  {
    value: { gush: '434', division: '43847', status: 'active' },
    label: 'test',
  },
  {
    value: { gush: '434', division: '43847', status: 'active' },
    label: 'test2',
  },
  {
    value: { gush: '434', division: '43847', status: 'active' },
    label: 'test3',
  },
  {
    value: { gush: '434', division: '43847', status: 'active' },
    label: 'test4',
  },
];
