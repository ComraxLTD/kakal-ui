import { KKLSelectOption } from '../../../../../kakal-ui/src/public-api';
import { ObserversCommittee } from '../../model/observersCommittee';

export interface RootObject {
  id: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  gender?: string;
  city?: string;
  date?: Date | string;
  currency?: string;
}
export interface OptionObject {
  id?: number;
  city: string;
}

export const DEMO_DATA: RootObject[] = [
  {
    id: 1,
    first_name: 'Harold',
    last_name: 'Bouchier',
    email: 'hbouchier0@cbc.ca',
    phone: '89384938493',
    gender: 'Male',
    city: 'Russia',
    date: new Date('9/13/2021').toISOString(),
    currency: 'EUR',
  },
  {
    id: 2,
    first_name: 'Gustaf',
    last_name: 'Vanyukov',
    email: 'gvanyukov1@ning.com',
    phone: '89384938493',
    gender: 'Male',
    city: 'Tupsan',
    date: new Date('10/28/2021'),
    currency: 'PHP',
  },
  {
    id: 3,
    first_name: 'Zebadiah',
    last_name: 'Finlow',
    email: 'zfinlow2@ted.com',
    phone: '89384938493',
    gender: 'Female',
    city: 'Nanqiao',
    date: new Date('1/7/2022'),
    currency: 'CNY',
  },
  {
    id: 4,
    first_name: 'Olivier',
    last_name: 'Burhouse',
    email: 'oburh343434ouse3@mediafire.com',
    phone: '89384938493',
    gender: 'Male',
    city: 'Novo',
    date: new Date('11/23/2021'),
    currency: 'EUR',
  },
  {
    id: 5,
    first_name: 'Winifield',
    last_name: 'Van Dalen',
    email: 'wvandalen4@exblog.jp',
    phone: '89384938493',
    gender: 'Female',
    city: 'Si Khoraphum',
    date: new Date('12/18/2021'),
    currency: 'THB',
  },
  // {
  //   id: 6,
  //   first_name: 'Tadd',
  //   last_name: 'Vowles',
  //   email: 'tvowles5@rakuten.co.jp',
  //   phone: '89384938493.jp',
  //   gender: 'Female',
  //   city: 'Miaojie',
  //   date: new Date( '1/11/2022'),
  //   currency: 'CNY',
  // },
  // {
  //   id: 7,
  //   first_name: 'Massimo',
  //   last_name: 'Willoughley',
  //   email: 'mwilloughley6@theglobeandmail.com',
  //   phone: '89384938493',
  //   gender: 'Male',
  //   city: 'Qingyang',
  //   date: new Date( '1/28/2022'),
  //   currency: null,
  // },
  // {
  //   id: 8,
  //   first_name: 'Ring',
  //   last_name: 'Otteridge',
  //   email: 'rotteridge7@harvard.edu',
  //   phone: '89384938493',
  //   gender: 'Female',
  //   city: 'Limoges',
  //   date: new Date( '11/30/2021'),
  //   currency: 'EUR',
  // },
  // {
  //   id: 9,
  //   first_name: 'Bartholomeus',
  //   last_name: 'Andreolli',
  //   email: 'bandreolli8@jimdo.com',
  //   phone: '89384938493',
  //   gender: 'Male',
  //   city: 'Foxrock',
  //   date: new Date( '8/14/2021'),
  //   currency: 'EUR',
  // },
  // {
  //   id: 10,
  //   first_name: 'Corby',
  //   last_name: 'Decayette',
  //   email: 'cdecayette9@microsoft.com',
  //   phone: '89384938493',
  //   gender: 'Female',
  //   city: 'Naagas',
  //   date: new Date( '3/31/2021'),
  //   currency: null,
  // },
  // {
  //   id: 11,
  //   first_name: 'Madelon',
  //   last_name: 'Aughtie',
  //   email: 'maughtiea@europa.eu',
  //   phone: '89384938493',
  //   gender: 'Male',
  //   city: 'Williston',
  //   date: new Date( '6/27/2021'),
  //   currency: 'ZAR',
  // },
  // {
  //   id: 12,
  //   first_name: 'Abigael',
  //   last_name: 'Gillease',
  //   email: 'agilleaseb@pcworld.com',
  //   phone: '89384938493',
  //   gender: 'Male',
  //   city: 'Fruitvale',
  //   date: new Date '6/21/2021',
  //   currency: 'CAD',
  // },
  // {
  //   id: 13,
  //   first_name: 'Eva',
  //   last_name: 'Swynfen',
  //   email: 'eswynfenc@ask.com',
  //   phone: '89384938493',
  //   gender: 'Male',
  //   city: 'Bộc Bố',
  //   date: new Date '3/19/2021',
  //   currency: 'VND',
  // },
  // {
  //   id: 14,
  //   first_name: 'Walden',
  //   last_name: 'Ridwood',
  //   email: 'wridwoodd@ted.com',
  //   phone: '89384938493',
  //   gender: 'Male',
  //   city: 'Tabālah',
  //   date: new Date '10/4/2021',
  //   currency: null,
  // },
  // {
  //   id: 15,
  //   first_name: 'Kellyann',
  //   last_name: 'Swadden',
  //   email: 'kswaddene@latimes.com',
  //   phone: '89384938493',
  //   gender: 'Male',
  //   city: 'Bol’shoy Karay',
  //   date: new Date '2/2/2022',
  //   currency: 'RUB',
  // },
  // {
  //   id: 16,
  //   first_name: 'Allin',
  //   last_name: 'Lishman',
  //   email: 'alishmanf@thetimes.co.uk',
  //   phone: '89384938493.uk',
  //   gender: 'Genderfluid',
  //   city: 'Jangkat',
  //   date: new Date '8/10/2021',
  //   currency: null,
  // },
  // {
  //   id: 17,
  //   first_name: 'Burnaby',
  //   last_name: 'Amber',
  //   email: 'bamberg@latimes.com',
  //   phone: '89384938493',
  //   gender: 'Female',
  //   city: 'Roches Noire',
  //   date: new Date '9/9/2021',
  //   currency: 'MUR',
  // },
  // {
  //   id: 18,
  //   first_name: 'Liva',
  //   last_name: 'McNeigh',
  //   email: 'lmcneighh@arstechnica.com',
  //   phone: '89384938493',
  //   gender: 'Bigender',
  //   city: 'Carmen',
  //   date: new Date '8/10/2021',
  //   currency: null,
  // },
  // {
  //   id: 19,
  //   first_name: 'Marlyn',
  //   last_name: 'Rosling',
  //   email: 'mroslingi@lycos.com',
  //   phone: '89384938493',
  //   gender: 'Male',
  //   city: 'Staryy Togul',
  //   date: new Date '8/17/2021',
  //   currency: 'RUB',
  // },
  // {
  //   id: 20,
  //   first_name: 'Janaye',
  //   last_name: 'Barcke',
  //   email: 'jbarckej@g.co',
  //   phone: 'jbarckej@g.co',
  //   gender: 'Female',
  //   city: 'Bořitov',
  //   date: new Date '10/4/2021',
  //   currency: 'CZK',
  // },
];

export const DEMO_OPTIONS: OptionObject[] = [
  {
    id: 1,
    city: 'Argentina',
  },
  {
    id: 2,
    city: 'Afghanistan',
  },
  {
    id: 3,
    city: 'Russia',
  },
  {
    id: 4,
    city: 'Indonesia',
  },
  {
    id: 5,
    city: 'Tupsan',
  },
  {
    id: 6,
    city: 'Nigeria',
  },
  {
    id: 7,
    city: 'United States',
  },
  {
    id: 8,
    city: 'Poland',
  },
  {
    id: 9,
    city: 'Indonesia',
  },
  {
    id: 10,
    city: 'China',
  },
];

export const MOCK_OPTIONS: KKLSelectOption[] = [
  {
    id: 1,
    label: 'Argentina',
    value: 1,
  },
  {
    id: 2,
    label: 'Afghanistan',
    value: 2,
  },
  {
    id: 3,
    label: 'Russia',
    value: 3,
  },
  {
    id: 4,
    label: 'Indonesia',
    value: 4,
  },
  {
    id: 5,
    label: 'Tupsan',
    value: 5,
  },
  {
    id: 6,
    label: 'Nigeria',
    value: 6,
  },
  {
    id: 7,
    label: 'United States',
    value: 7,
  },
  {
    id: 8,
    label: 'Poland',
    value: 8,
  },
  {
    id: 9,
    label: 'Indonesia',
    value: 9,
  },
  {
    id: 10,
    label: 'China',
    value: 10,
  },
];

export interface OptionObject {
  id?: number;
  city: string;
}

export const ROOT_DATA: ObserversCommittee[] = [
  {
    committeeDate: '03/10/2021',
    committeeId: 1,
    observer: [
      {
        email: null,
        phone: null,
        userData: 'מערכות מידע',
        userId: 'RafiN',
        userName: 'רפאל נוימן',
      },
    ],
    region: { regionId: 1, regionName: 'ירושלים' },
    remiTikim: [
      {
        monetaryValue: 230000,
        nechasim: [],
        nechasimCount: 2,
        tikId: 12,
        tikStatus: { statusId: 1, statusName: '????' },
      },
      {
        monetaryValue: 5670000,
        nechasim: [],
        nechasimCount: 1,
        tikId: 331,
        tikStatus: { statusId: 1, statusName: '????' },
      },
    ],
  },
];
