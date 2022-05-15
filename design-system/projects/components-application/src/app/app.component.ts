import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CardStatus,
  MenuCard,
  PageHeadlineService,
  RouterService,
  RowActionEvent,
  RowActionModel,
  RowExpandEvent,
  StatusSelectionEvent,
  TableBase,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'education';
  isOpened: boolean = false;

  tabs = [
    { key: 'first', label: 'First Tab'},
    { key: 'second', label: 'Second Tab'},
    { key: 'third', label: 'Third Tab'}
  ];
  cards: MenuCard[] = [
    { path: 'as', templateName: '', svgIcon: 'home' } as MenuCard,
    { path: 'as', templateName: 'temp', svgIcon: 'tree', label: 'test' } as MenuCard,
    { path: 'as', templateName: 'test', svgIcon: 'connect', label: 'test2' } as MenuCard,
    { path: 'as', templateName: 'test3', svgIcon: 'tree', label: 'test3' } as MenuCard,
  ];
  cards2: MenuCard[] = [
    { path: 'as', templateName: 'new', label: 'test',isChildren:true } as MenuCard,
    { path: 'as', templateName: 'test', label: 'test2', isChildren: true } as MenuCard,
    { path: 'as', templateName: 'newTest', label: 'test3',isChildren:true } as MenuCard,
  ];

  status: CardStatus[] = [
    {
      key: 'first',
      svgIcon: 'home',
      label: 'working',
      path: '',
      options: [],
    },
    {
      key: 'second',
      svgIcon: 'home',
      label: 'working',
      path: '',
      options: [],
    },
    {
      key: 'third',
      svgIcon: 'home',
      label: 'working',
      path: '',
      options: [],
    },
  ];

  // status: CardStatus[] = [
  //   {
  //     key: 'first',
  //     svgIcon: 'home',
  //     label: 'working',
  //     path: '',
  //     options: [],
  //   },
  //   {
  //     key: 'second',
  //     svgIcon: 'home',
  //     label: 'working',
  //     path: '',
  //     options: [],
  //   },
  //   {
  //     key: 'third',
  //     svgIcon: 'home',
  //     label: 'working',
  //     path: '',
  //     options: [],
  //   },
  // ];


  constructor(
    private routerService: RouterService,
     private pageHeadlineSource: PageHeadlineService
  ) {}



  ngOnInit(): void {
    // setTimeout(() => {
      this.pageHeadlineSource.emitPageHeadlineItems([{ value: {
        label: 'כותרת נוספת',
        authorizedBars: 7,
        totalBars: 10,
      }, status: true }]);
    // }, 3000);
  }

  onLogoClicked() {
    this.routerService.navigate('/');
  }
  onStatus(event: StatusSelectionEvent) {
    console.log(event);
  }




  dataSource: any[] = [{

    "id": 1,

    "name": "Hillyer Bowkley",

    "DOB": "2022-06-05T11:40:04Z",

    "occupation": "Physical Therapy Assistant",

    "yearsOfExperience": 32,

    "city": {"label":"La Mesa","value":10}

  }, {

    "id": 2,

    "name": "Jodie Bartholat",

    "DOB": "2022-09-07T04:32:27Z",

    "occupation": "Administrative Officer",

    "yearsOfExperience": 9,

    "city": {"label":"Jishan","value":1}

  }, {

    "id": 3,

    "name": "Reeba Frandsen",

    "DOB": "2022-06-09T10:56:22Z",

    "occupation": "Web Designer I",

    "yearsOfExperience": 79,

    "city": {"label":"Winburg","value":10}

  }, {

    "id": 4,

    "name": "Ricky Chettoe",

    "DOB": "2022-01-11T12:52:15Z",

    "occupation": "Safety Technician IV",

    "yearsOfExperience": 40,

    "city": {"label":"Tsybli","value":87}

  }, {

    "id": 5,

    "name": "Ward Du Barry",

    "DOB": "2021-12-19T09:05:38Z",

    "occupation": "Media Manager IV",

    "yearsOfExperience": 16,

    "city": {"label":"Greensboro","value":32}

  }, {

    "id": 6,

    "name": "Maximilian Spratley",

    "DOB": "2022-07-15T04:59:57Z",

    "occupation": "VP Quality Control",

    "yearsOfExperience": 21,

    "city": {"label":"Yinla","value":98}

  }, {

    "id": 7,

    "name": "Hersh Cronin",

    "DOB": "2022-05-02T02:11:21Z",

    "occupation": "Statistician II",

    "yearsOfExperience": 43,

    "city": {"label":"Kalabahi","value":64}

  }, {

    "id": 8,

    "name": "Paloma Althorp",

    "DOB": "2022-04-01T23:21:52Z",

    "occupation": "Staff Accountant II",

    "yearsOfExperience": 53,

    "city": {"label":"Kilju","value":59}

  }, {

    "id": 9,

    "name": "Mariel Dondon",

    "DOB": "2022-05-16T20:03:30Z",

    "occupation": "VP Sales",

    "yearsOfExperience": 25,

    "city": {"label":"San Cristóbal","value":38}

  }, {

    "id": 10,

    "name": "Flinn Rickeard",

    "DOB": "2021-05-29T19:53:40Z",

    "occupation": "Graphic Designer",

    "yearsOfExperience": 62,

    "city": {"label":"Moa","value":18}

  }, {

    "id": 11,

    "name": "Nancie Glazebrook",

    "DOB": "2022-06-12T22:41:49Z",

    "occupation": "Automation Specialist II",

    "yearsOfExperience": 17,

    "city": {"label":"Zengjia","value":99}

  }, {

    "id": 12,

    "name": "Reidar Carnihan",

    "DOB": "2021-04-21T19:08:27Z",

    "occupation": "Software Engineer III",

    "yearsOfExperience": 77,

    "city": {"label":"Göteborg","value":99}

  }, {

    "id": 13,

    "name": "Ric Culpan",

    "DOB": "2021-12-05T22:56:40Z",

    "occupation": "Statistician II",

    "yearsOfExperience": 12,

    "city": {"label":"Bayt al ‘Awābī","value":84}

  }, {

    "id": 14,

    "name": "Arlyne Stroulger",

    "DOB": "2022-02-26T08:25:09Z",

    "occupation": "Data Coordiator",

    "yearsOfExperience": 93,

    "city": {"label":"Malapaubhara","value":75}

  }, {

    "id": 15,

    "name": "Robinia Muncer",

    "DOB": "2022-07-16T13:19:05Z",

    "occupation": "Administrative Officer",

    "yearsOfExperience": 74,

    "city": {"label":"Sete Lagoas","value":53}

  }, {

    "id": 16,

    "name": "Doug Hazeup",

    "DOB": "2022-09-17T02:55:51Z",

    "occupation": "Accountant II",

    "yearsOfExperience": 25,

    "city": {"label":"San Juan de la Maguana","value":69}

  }, {

    "id": 17,

    "name": "Sheppard Bovaird",

    "DOB": "2022-01-19T11:02:21Z",

    "occupation": "Dental Hygienist",

    "yearsOfExperience": 83,

    "city": {"label":"El Monte","value":71}

  }, {

    "id": 18,

    "name": "Kath Dominichelli",

    "DOB": "2022-01-19T00:50:50Z",

    "occupation": "VP Product Management",

    "yearsOfExperience": 63,

    "city": {"label":"Zizhao","value":85}

  }, {

    "id": 19,

    "name": "Rosamond Tzar",

    "DOB": "2021-07-08T01:07:10Z",

    "occupation": "VP Sales",

    "yearsOfExperience": 87,

    "city": {"label":"Būlaevo","value":65}

  }, {

    "id": 20,

    "name": "Helsa Cork",

    "DOB": "2021-08-24T23:51:47Z",

    "occupation": "Database Administrator I",

    "yearsOfExperience": 4,

    "city": {"label":"Iracemápolis","value":75}

  }, {

    "id": 21,

    "name": "Tremayne Jenkyn",

    "DOB": "2021-11-05T06:59:06Z",

    "occupation": "Automation Specialist I",

    "yearsOfExperience": 70,

    "city": {"label":"Tanabi","value":42}

  }, {

    "id": 22,

    "name": "Charlena Chiene",

    "DOB": "2021-06-30T12:54:41Z",

    "occupation": "Biostatistician IV",

    "yearsOfExperience": 7,

    "city": {"label":"Sasa","value":48}

  }, {

    "id": 23,

    "name": "Wit Kneeshaw",

    "DOB": "2021-07-21T19:35:38Z",

    "occupation": "Nurse Practicioner",

    "yearsOfExperience": 58,

    "city": {"label":"Pelabuhanratu","value":25}

  }, {

    "id": 24,

    "name": "Galen Taber",

    "DOB": "2022-01-11T01:03:45Z",

    "occupation": "Environmental Tech",

    "yearsOfExperience": 10,

    "city": {"label":"Neglasari","value":69}

  }, {

    "id": 25,

    "name": "Sutton Clemmens",

    "DOB": "2021-06-13T00:54:22Z",

    "occupation": "Operator",

    "yearsOfExperience": 88,

    "city": {"label":"Jiangshan","value":70}

  }, {

    "id": 26,

    "name": "Norah Bussens",

    "DOB": "2021-06-21T03:03:52Z",

    "occupation": "General Manager",

    "yearsOfExperience": 9,

    "city": {"label":"Shuangqiao","value":48}

  }, {

    "id": 27,

    "name": "Guinna Nickols",

    "DOB": "2021-04-30T17:36:29Z",

    "occupation": "Structural Engineer",

    "yearsOfExperience": 15,

    "city": {"label":"Busan","value":27}

  }, {

    "id": 28,

    "name": "Carney Pedrollo",

    "DOB": "2022-04-05T03:57:46Z",

    "occupation": "Sales Representative",

    "yearsOfExperience": 27,

    "city": {"label":"Mikrókampos","value":19}

  }, {

    "id": 29,

    "name": "Andrew Kemme",

    "DOB": "2022-09-04T11:27:37Z",

    "occupation": "Environmental Tech",

    "yearsOfExperience": 93,

    "city": {"label":"Pacaembu","value":4}

  }, {

    "id": 30,

    "name": "Tam Christopher",

    "DOB": "2021-08-20T04:10:22Z",

    "occupation": "Marketing Manager",

    "yearsOfExperience": 73,

    "city": {"label":"Mendoza","value":22}

  }, {

    "id": 31,

    "name": "Philipa Pharaoh",

    "DOB": "2021-12-26T11:39:12Z",

    "occupation": "Marketing Assistant",

    "yearsOfExperience": 16,

    "city": {"label":"San Juan","value":21}

  }, {

    "id": 32,

    "name": "Carla Pawlaczyk",

    "DOB": "2022-01-24T04:19:47Z",

    "occupation": "Marketing Manager",

    "yearsOfExperience": 62,

    "city": {"label":"Jayanca","value":36}

  }, {

    "id": 33,

    "name": "Jaimie Rosel",

    "DOB": "2022-07-20T01:23:48Z",

    "occupation": "Director of Sales",

    "yearsOfExperience": 31,

    "city": {"label":"Horqueta","value":30}

  }, {

    "id": 34,

    "name": "Cornie Rudham",

    "DOB": "2021-11-02T09:22:39Z",

    "occupation": "Analog Circuit Design manager",

    "yearsOfExperience": 63,

    "city": {"label":"Invermere","value":69}

  }, {

    "id": 35,

    "name": "Shanda Garcia",

    "DOB": "2022-08-31T20:38:11Z",

    "occupation": "Mechanical Systems Engineer",

    "yearsOfExperience": 30,

    "city": {"label":"Hengpi","value":9}

  }, {

    "id": 36,

    "name": "Wynn Nystrom",

    "DOB": "2021-05-01T04:52:50Z",

    "occupation": "Recruiting Manager",

    "yearsOfExperience": 3,

    "city": {"label":"Licheng","value":40}

  }, {

    "id": 37,

    "name": "Pincas Dewitt",

    "DOB": "2021-08-17T14:36:54Z",

    "occupation": "Automation Specialist I",

    "yearsOfExperience": 40,

    "city": {"label":"Mişrātah","value":93}

  }, {

    "id": 38,

    "name": "Salim Spaldin",

    "DOB": "2022-06-09T14:15:40Z",

    "occupation": "Compensation Analyst",

    "yearsOfExperience": 32,

"city": {"label":"Xinsheng","value":60}

  }, {

    "id": 39,

    "name": "Ramon Tuddall",

    "DOB": "2021-11-06T23:42:35Z",

    "occupation": "Senior Editor",

    "yearsOfExperience": 17,

    "city": {"label":"Cimalati","value":36}

  }, {

    "id": 40,

    "name": "Ellene Landrick",

    "DOB": "2022-02-17T13:34:10Z",

    "occupation": "Senior Editor",

    "yearsOfExperience": 58,

    "city": {"label":"Pasirhuni","value":25}

  }, {

    "id": 41,

    "name": "Arv Van den Velde",

    "DOB": "2021-08-30T16:59:57Z",

    "occupation": "Software Test Engineer I",

    "yearsOfExperience": 43,

    "city": {"label":"Yuchi","value":6}

  }, {

    "id": 42,

    "name": "Bentlee Insull",

    "DOB": "2021-07-21T19:07:47Z",

    "occupation": "Senior Financial Analyst",

    "yearsOfExperience": 92,

    "city": {"label":"Borek Wielkopolski","value":55}

  }, {

    "id": 43,

    "name": "Cate Seamans",

    "DOB": "2021-04-16T04:27:24Z",

    "occupation": "Legal Assistant",

    "yearsOfExperience": 15,

    "city": {"label":"Carvalhal","value":59}

  }, {

    "id": 44,

    "name": "Estrella Wellesley",

    "DOB": "2022-02-24T09:43:12Z",

    "occupation": "Senior Developer",

    "yearsOfExperience": 78,

    "city": {"label":"Lotoshino","value":56}

  }, {

    "id": 45,

    "name": "Torrie Sambrok",

    "DOB": "2022-03-06T09:20:04Z",

    "occupation": "VP Sales",

    "yearsOfExperience": 61,

    "city": {"label":"San Gil","value":2}

  }, {

    "id": 46,

    "name": "Flem Yude",

    "DOB": "2021-06-19T00:29:50Z",

    "occupation": "Food Chemist",

    "yearsOfExperience": 85,

    "city": {"label":"Beihe","value":88}

  }, {

    "id": 47,

    "name": "Brianna Maceur",

    "DOB": "2021-09-03T18:27:49Z",

    "occupation": "Actuary",

    "yearsOfExperience": 30,

    "city": {"label":"Épinal","value":22}

  }, {

    "id": 48,

    "name": "Winifred McMychem",

    "DOB": "2022-07-01T23:21:02Z",

    "occupation": "VP Marketing",

    "yearsOfExperience": 66,

    "city": {"label":"Buôn Ma Thuột","value":4}

  }, {

    "id": 49,

    "name": "Kata Whittier",

    "DOB": "2022-01-08T04:41:43Z",

    "occupation": "VP Sales",

    "yearsOfExperience": 92,

    "city": {"label":"Stříbro","value":64}

  }, {

    "id": 50,

    "name": "Fabiano Blakesley",

    "DOB": "2021-06-23T23:21:40Z",

    "occupation": "Internal Auditor",

    "yearsOfExperience": 24,

    "city": {"label":"Pleven","value":29}

  }, {

    "id": 51,

    "name": "Siusan Janic",

    "DOB": "2022-05-19T11:21:43Z",

    "occupation": "Account Representative IV",

    "yearsOfExperience": 92,

    "city": {"label":"Mayuan","value":93}

  }, {

    "id": 52,

    "name": "Isidora Ferrieri",

    "DOB": "2022-09-17T01:50:30Z",

    "occupation": "Registered Nurse",

    "yearsOfExperience": 41,

    "city": {"label":"Espinillo","value":78}

  }, {

    "id": 53,

    "name": "Maggi Fishbourn",

    "DOB": "2021-10-10T15:38:47Z",

    "occupation": "Statistician II",

    "yearsOfExperience": 68,

    "city": {"label":"Bludov","value":82}

  }, {

    "id": 54,

    "name": "Angelia Garnson",

    "DOB": "2022-01-13T02:32:15Z",

    "occupation": "Database Administrator I",

    "yearsOfExperience": 70,

    "city": {"label":"Prince Albert","value":25}

  }, {

    "id": 55,

    "name": "Tandi Taffurelli",

    "DOB": "2022-04-23T01:19:33Z",

    "occupation": "Nurse Practicioner",

    "yearsOfExperience": 13,

    "city": {"label":"Xingxi","value":58}

  }, {

    "id": 56,

    "name": "Gay Shoesmith",

    "DOB": "2022-07-08T10:28:40Z",

    "occupation": "Community Outreach Specialist",

    "yearsOfExperience": 53,

    "city": {"label":"Konobeyevo","value":10}

  }, {

    "id": 57,

    "name": "Bertie Kennaway",

    "DOB": "2022-04-02T16:16:08Z",

    "occupation": "Accountant III",

    "yearsOfExperience": 36,

    "city": {"label":"Bil‘īn","value":43}

  }, {

    "id": 58,

    "name": "Consolata Kearley",

    "DOB": "2021-08-08T19:41:57Z",

    "occupation": "Analyst Programmer",

    "yearsOfExperience": 17,

    "city": {"label":"Vagos","value":37}

  }, {

    "id": 59,

    "name": "Darcy Scaplehorn",

    "DOB": "2021-05-31T00:13:15Z",

    "occupation": "Teacher",

    "yearsOfExperience": 37,

    "city": {"label":"Cibodas","value":60}

  }, {

    "id": 60,

    "name": "Cassaundra Garnsworth",

    "DOB": "2022-03-16T14:20:50Z",

    "occupation": "Safety Technician III",

    "yearsOfExperience": 51,

    "city": {"label":"Limit","value":67}

  }, {

    "id": 61,

    "name": "Derward Daltrey",

    "DOB": "2021-07-13T11:39:17Z",

    "occupation": "Programmer Analyst IV",

    "yearsOfExperience": 70,

    "city": {"label":"Bhairāhawā","value":91}

  }, {

    "id": 62,

    "name": "Esmeralda Iacobacci",

    "DOB": "2022-06-02T21:40:17Z",

    "occupation": "Technical Writer",

    "yearsOfExperience": 33,

    "city": {"label":"Saky","value":48}

  }, {

    "id": 63,

    "name": "Agneta Armiger",

    "DOB": "2021-06-25T06:08:40Z",

    "occupation": "Software Engineer I",

    "yearsOfExperience": 48,

    "city": {"label":"Sorong","value":81}

  }, {

    "id": 64,

    "name": "Idalina Martynikhin",

    "DOB": "2021-12-11T12:34:19Z",

    "occupation": "Software Engineer III",

    "yearsOfExperience": 39,

    "city": {"label":"Hongqiao","value":60}

  }, {

    "id": 65,

    "name": "Isaiah Castiglione",

    "DOB": "2021-11-14T01:51:48Z",

    "occupation": "Help Desk Operator",

    "yearsOfExperience": 45,

    "city": {"label":"Bonao","value":82}

  }, {

    "id": 66,

    "name": "Imogen Cazereau",

    "DOB": "2021-12-05T22:01:07Z",

    "occupation": "VP Marketing",

    "yearsOfExperience": 9,

    "city": {"label":"Ōme","value":7}

  }, {

    "id": 67,

    "name": "Fleming Aveyard",

    "DOB": "2021-05-27T23:28:13Z",

    "occupation": "Editor",

    "yearsOfExperience": 57,

    "city": {"label":"Shuiting","value":80}

  }, {

    "id": 68,

    "name": "Sindee Moen",

    "DOB": "2021-09-21T01:13:11Z",

    "occupation": "Design Engineer",

    "yearsOfExperience": 32,

    "city": {"label":"Condega","value":74}

  }, {

    "id": 69,

    "name": "Deanna Downton",

    "DOB": "2021-09-29T00:01:24Z",

    "occupation": "Assistant Professor",

    "yearsOfExperience": 24,

    "city": {"label":"Zamoskvorech’ye","value":23}

  }, {

    "id": 70,

    "name": "Burton Slixby",

    "DOB": "2022-09-17T03:04:16Z",

    "occupation": "Social Worker",

    "yearsOfExperience": 62,

    "city": {"label":"Matahuasi","value":3}

  }, {

    "id": 71,

    "name": "Lottie Gatiss",

    "DOB": "2021-04-30T16:15:35Z",

    "occupation": "Recruiter",

    "yearsOfExperience": 11,

    "city": {"label":"Příbor","value":78}

  }, {

    "id": 72,

    "name": "Zarla Duval",

    "DOB": "2022-09-21T17:31:07Z",

    "occupation": "Software Engineer III",

    "yearsOfExperience": 90,

    "city": {"label":"Nīkêh","value":48}

  }, {

    "id": 73,

    "name": "Susette Gabbatt",

    "DOB": "2021-12-30T19:24:18Z",

    "occupation": "Tax Accountant",

    "yearsOfExperience": 25,

    "city": {"label":"Lālmohan","value":94}

  }, {

    "id": 74,

    "name": "Milissent Kobel",

    "DOB": "2022-06-03T20:43:27Z",

    "occupation": "Biostatistician II",

    "yearsOfExperience": 83,

    "city": {"label":"Kozakai-chō","value":74}

  }, {

    "id": 75,

    "name": "Lila Cyster",

    "DOB": "2022-08-14T18:57:29Z",

    "occupation": "Technical Writer",

    "yearsOfExperience": 79,

    "city": {"label":"Piškorevci","value":20}

  }, {

    "id": 76,

    "name": "Moses Hazart",

    "DOB": "2021-06-29T14:36:57Z",

    "occupation": "Environmental Specialist",

    "yearsOfExperience": 82,

    "city": {"label":"Kentongan","value":58}

  }, {

    "id": 77,

    "name": "Audi Tibalt",

    "DOB": "2022-01-23T20:53:00Z",

    "occupation": "Financial Analyst",

    "yearsOfExperience": 51,

    "city": {"label":"Gensi","value":20}

  }, {

    "id": 78,

    "name": "Bobby Sketcher",

    "DOB": "2021-04-19T05:36:50Z",

    "occupation": "GIS Technical Architect",

    "yearsOfExperience": 63,

    "city": {"label":"Itápolis","value":68}

  }, {

    "id": 79,

    "name": "Sari Brounsell",

    "DOB": "2021-11-30T06:36:10Z",

    "occupation": "Senior Quality Engineer",

    "yearsOfExperience": 48,

    "city": {"label":"Boa Esperança","value":33}

  }, {

    "id": 80,

    "name": "Delinda Goakes",

    "DOB": "2021-06-23T21:17:09Z",

    "occupation": "Budget/Accounting Analyst III",

    "yearsOfExperience": 56,

    "city": {"label":"Longhe","value":14}

  }, {

    "id": 81,

    "name": "Retha Fleis",

    "DOB": "2022-09-16T02:05:27Z",

    "occupation": "Automation Specialist IV",

    "yearsOfExperience": 84,

    "city": {"label":"Phayuha Khiri","value":59}

  }, {

    "id": 82,

    "name": "Fernando Hasnney",

    "DOB": "2021-04-30T08:41:23Z",

    "occupation": "Director of Sales",

    "yearsOfExperience": 81,

    "city": {"label":"Bera","value":23}

  }, {

    "id": 83,

    "name": "Emmanuel Grealy",

    "DOB": "2021-11-28T10:08:56Z",

    "occupation": "Data Coordiator",

    "yearsOfExperience": 33,

    "city": {"label":"Mila","value":18}

  }, {

    "id": 84,

    "name": "Leanna Dalrymple",

    "DOB": "2022-06-11T17:32:51Z",

    "occupation": "Mechanical Systems Engineer",

    "yearsOfExperience": 76,

    "city": {"label":"Pandangan Kulon","value":69}

  }, {

    "id": 85,

    "name": "Jolyn Borzone",

    "DOB": "2021-12-19T01:30:47Z",

    "occupation": "Quality Control Specialist",

    "yearsOfExperience": 47,

    "city": {"label":"Glugur Tengah","value":87}

  }, {

    "id": 86,

    "name": "Carmita Godsil",

    "DOB": "2021-12-26T21:22:48Z",

    "occupation": "Graphic Designer",

    "yearsOfExperience": 81,

    "city": {"label":"Rokytne","value":59}

  }, {

    "id": 87,

    "name": "Dane Goldson",

    "DOB": "2021-11-03T21:42:49Z",

    "occupation": "Human Resources Manager",

    "yearsOfExperience": 90,

    "city": {"label":"Graikochóri","value":8}

  }, {

    "id": 88,

    "name": "Mariette Pennyman",

    "DOB": "2021-12-03T14:43:55Z",

    "occupation": "Software Test Engineer IV",

    "yearsOfExperience": 26,

    "city": {"label":"Magole","value":2}

  }, {

    "id": 89,

    "name": "Marietta Cummings",

    "DOB": "2022-09-19T09:13:54Z",

    "occupation": "Accountant I",

    "yearsOfExperience": 11,

    "city": {"label":"Wangfu","value":53}

  }, {

    "id": 90,

    "name": "Bobbe Moden",

    "DOB": "2021-10-14T15:33:13Z",

    "occupation": "Senior Cost Accountant",

    "yearsOfExperience": 72,

    "city": {"label":"Pirg","value":44}

  }, {

    "id": 91,

    "name": "Kasey Darling",

    "DOB": "2021-06-15T05:01:57Z",

    "occupation": "Environmental Specialist",

    "yearsOfExperience": 17,

    "city": {"label":"Shimokizukuri","value":3}

  }, {

    "id": 92,

    "name": "Lucinda Pavis",

    "DOB": "2021-07-21T20:10:11Z",

    "occupation": "Chief Design Engineer",

    "yearsOfExperience": 4,

    "city": {"label":"Carapelhos","value":19}

  }, {

    "id": 93,

    "name": "Frances Blasiak",

    "DOB": "2022-02-08T12:51:12Z",

    "occupation": "Accountant IV",

    "yearsOfExperience": 18,

    "city": {"label":"Novosheshminsk","value":2}

  }, {

    "id": 94,

    "name": "Gordy Kitchinghan",

    "DOB": "2022-02-27T10:28:51Z",

    "occupation": "Product Engineer",

    "yearsOfExperience": 20,

    "city": {"label":"Smolino","value":98}

  }, {

    "id": 95,

    "name": "Petey Chilver",

    "DOB": "2021-06-01T06:15:48Z",

    "occupation": "GIS Technical Architect",

    "yearsOfExperience": 82,

    "city": {"label":"Kyzyl-Oktyabr’skiy","value":8}

  }, {

    "id": 96,

    "name": "Willa Melladew",

    "DOB": "2021-11-17T18:45:03Z",

    "occupation": "Associate Professor",

    "yearsOfExperience": 54,

    "city": {"label":"Al ‘Ulá","value":80}

  }, {

    "id": 97,

    "name": "Lia Bewly",

    "DOB": "2022-09-07T16:22:28Z",

    "occupation": "Software Engineer III",

    "yearsOfExperience": 96,

    "city": {"label":"Walenrang","value":63}

  }, {

    "id": 98,

    "name": "Carrissa Scoggans",

    "DOB": "2021-05-07T14:01:15Z",

    "occupation": "Budget/Accounting Analyst II",

    "yearsOfExperience": 72,

    "city": {"label":"Bwizibwera","value":13}

  }, {

    "id": 99,

    "name": "Casi Larchiere",

    "DOB": "2021-04-16T06:13:51Z",

    "occupation": "Statistician I",

    "yearsOfExperience": 36,

    "city": {"label":"Drakhtik","value":67}

  }, {

    "id": 100,

    "name": "Alejandrina Vautrey",

    "DOB": "2022-01-12T20:59:20Z",

    "occupation": "Mechanical Systems Engineer",

    "yearsOfExperience": 57,

    "city": {"label":"Qiandeng","value":44}

  }];

  description;
  // the columns of the table, according to the data coming from ComraxTablesService
  columns: TableBase[] = [
    // in the first column, there is an additional 'button' property, which makes the cells in that column into buttons
    // the 'button' property correlates with the RowActionModel, accept for the 'label', which has no effect on the UI
    { key: 'id', label: 'Id', controlType: 'number', button: { type: 'visibility' } },
    { key: 'name', label: 'Name', controlType: 'text', },
    // in yearsOfExperience column, we can see the 'colIcon' which is used for adding an icon to all cells in that column
    { key: 'yearsOfExperience', label: 'YearsOfExperience', controlType: 'number', colIcon: 'tree' },
    { key: 'occupation', label: 'Occupation', controlType: 'text', button: { type: 'visibility', icon: 'add' } },
    { key: 'city', label: 'עיר', controlType: 'select' },
    { key: 'dob', label: 'תאריך', controlType: 'date' },
  ];

  // every object in the rowActions array is a button that will appear on the left side of every row of the table
  rowActions: RowActionModel[] = [
    { type: 'inlineEdit', icon: 'edit', label: 'Edit' },
    { type: 'inlineDelete', icon: 'delete', label: 'Delete' },
    { type: 'visibility', icon: 'visibility', label: 'Show' },
    { type: 'inlineExpand', icon: 'keyboard_arrow_down', label: 'Expand' }
  ]

  // newRowAction is the label of the button in the actions column header
  newRowAction: string = 'הוסף שורה חדשה'
  dataSource2;

  columns2: TableBase[] = [
    { key: 'occupation', label: 'Occupation', controlType: 'text', noFilter: true},
    { key: 'name', label: 'Name', controlType: 'text', noFilter: true},
    { key: 'city', label: 'עיר', controlType: 'select', noFilter: true},
  ]



  // inserting the data into dataSource2
  onExpand(event: RowExpandEvent) {
    this.dataSource2 = [event.row]
    console.log(event);
  }
  // changing the description according to the actions taken
  // the visibility action, in the ID column and in the actions column
  onClicked(event: RowActionEvent) {
    this.description = `Actions Table: (ID: ${event.row.id}, ActionName: ${event.action}, City: ${event.row.city.label}, Date: ${event.row.dob}, Occupation: ${event.row.occupation}, YearsOfExperience: ${event.row.yearsOfExperience})`
  }

  // the save action
  onSave(event: FormGroup) {
    this.description = `Save Action: (ID: ${event.value.id}, Name: ${event.value.name}, City: ${event.value.city?.label}, Date: ${event.value.dob}, Occupation: ${event.value.occupation}, YearsOfExperience: ${event.value.yearsOfExperience})`
  }

  // the delete action
  onDelete(event: any) {
    this.description = `Delete Action: (ID: ${event.id}, Name: ${event.name}, City: ${event.city.label}, Date: ${event.dob}, Occupation: ${event.occupation}, YearsOfExperience: ${event.yearsOfExperience})`
  }

}
