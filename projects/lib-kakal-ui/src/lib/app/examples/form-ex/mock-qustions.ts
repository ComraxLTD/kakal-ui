import { Question } from '../../components/form/services/form.service';

const details: Question[] = [
  {
    key: 'supplier',
    label: 'ספק',
    controlType: 'select',
    options: [
      { label: 'solid', value: 'solid' },
      { label: 'great', value: 'great' },
    ],
  },
  {
    key: 'item',
    label: 'בחר פריט',
    controlType: 'select',
    options: [
      { label: 'solid', value: '12123' },
      { label: 'great', value: '23' },
      { label: 'good', value: '123' },
      { label: 'unproven', value: '123123123' },
    ],
  },

  {
    key: 'quantity',
    label: 'כמות',
    value: '',
  },

  {
    key: 'participants',
    label: 'משתתפים',
    value: '',
  },

  {
    key: 'price',
    label: 'מחיר',
    value: '',
    controlType: 'number',
  },

  {
    key: 'supplierCost',
    label: 'חיוב ספק',
    value: '',
  },

  {
    key: 'customerCost',
    label: 'חיוב לקוח',
    value: '',
  },

  {
    key: 'total',
    label: 'סה"כ',
    value: '',
  },
];

const gridDetails = details.map((question: Question) => {
  question.gridProps = { cols: 3 };

  return question;
});

const transport: Question[] = [
  {
    key: 'pickUpDate',
    icon: 'date_range',
    label: 'תאריך איסוף',
    controlType: 'select',
    options: [
      { label: 'יום 1', value: '1' },
      { label: 'יום 2', value: '2' },
      { label: 'יום 3', value: '3' },
      { label: 'יום 4', value: '4' },
    ],
  },
  {
    key: 'pickUpHour',
    label: 'שעת איסוף',
    icon: 'schedule',
    controlType: 'time',
  },

  {
    key: 'pickUpLocation',
    label: 'מקום איסוף',
    value: '',
    icon: 'place',
  },

  {
    key: 'pickUpAddress',
    label: 'כתובת איסוף',
    value: '',
    icon: 'place',
  },

  {
    key: 'dropDownDate',
    label: 'תאריך פיזור',
    icon: 'date_range',
    controlType: 'select',
    options: [
      { label: 'יום 1', value: '1' },
      { label: 'יום 2', value: '2' },
      { label: 'יום 3', value: '3' },
      { label: 'יום 4', value: '4' },
    ],
  },

  {
    key: 'dropDownHour',
    label: 'שעת פיזור',
    icon: 'schedule',
    controlType: 'time',
     },
  {
    key: 'comments',
    label: 'הערות',
    controlType: 'textarea',
    gridProps: {
      cols: 16,
      rows: 3,
      offset : 6
    },
  },
];

const gridTransport = transport.map((question: Question) => {
  question.gridProps = question.gridProps || { cols: 4 };

  return question;
});

export const multiQuestions: Question[] = [...gridDetails, ...gridTransport];

