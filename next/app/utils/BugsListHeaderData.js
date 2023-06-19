const BugsListHeaderData = [
  {
    id: 1,
    title: 'Заголовок',
    name: 'title',
    type: 'text',
    value: ''
  },
  {
    id: 2,
    title: 'Описание',
    name: 'description',
    type: 'textarea',
    value: ''
  },
  {
    id: 3,
    title: 'Шаги воспроизведения',
    name: 'playbackSteps',
    type: 'textarea',
    value: ''
  },
  {
    id: 4,
    title: 'Ожидаемый результат',
    name: 'expectedResult',
    type: 'textarea',
    value: ''
  },
  {
    id: 5,
    title: 'Фактический результат',
    name: 'actualResult',
    type: 'textarea',
    value: ''
  },
  {
    id: 6,
    title: 'Скриншот',
    name: 'screenshot',
    type: 'textarea',
    value: ''
  },
  {
    id: 7,
    title: 'Статус бага',
    name: 'bugStatus',
    type: 'select',
    value: 'new',
    options: [
      {
        name: 'Новый',
        value: 'new',
        label: 'Новый'
      },
      {
        name: 'Исправлено',
        value: 'corrected',
        label: 'Исправлено'
      },
      {
        name: 'Проверено',
        value: 'verified',
        label: 'Проверено'
      },
      {
        name: 'Не баг',
        value: 'not a bug',
        label: 'Не баг'
      },
      {
        name: 'Отложено',
        value: 'postponed',
        label: 'Отложено'
      }
    ]
  },
  {
    id: 8,
    title: 'Серьезность',
    name: 'seriousness',
    type: 'select',
    value: 'critical',
    options: [
      {
        name: 'Critical',
        value: 'critical',
        label: 'Critical'
      },
      {
        name: 'Blocked',
        value: 'blocked',
        label: 'Blocked'
      },
      {
        name: 'Major',
        value: 'major',
        label: 'Blocked'
      },
      {
        name: 'Minor',
        value: 'major',
        label: 'Major'
      }
    ]
  },
  {
    id: 9,
    title: 'Приоритет',
    name: 'priority',
    type: 'select',
    value: 'high',
    options: [
      {
        name: 'P1 - high',
        value: 'high',
        label: 'P1 - high'
      },
      {
        name: 'P2 - medium',
        value: 'medium',
        label: 'P2 - medium'
      },
      {
        name: 'P3 - low',
        value: 'low',
        label: 'P3 - low'
      }
    ]
  },
];

export default BugsListHeaderData;
