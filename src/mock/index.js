const mainMenu = [
  {id: 1, name: 'Счет', pathName: 'HomePage', icon: 'business'},
  {id: 2, name: 'История', pathName: 'HistoryPage', icon: 'history_toggle_off', query: { currentPage: 1, limit: 5 }},
  {id: 3, name: 'Планирование', pathName: 'PlanningPage', icon: 'event_note'},
  {id: 4, name: 'Новая запись', pathName: 'NewRecordPage', icon: 'add_circle'},
  {id: 5, name: 'Категории', pathName: 'CategoriesPage', icon: 'category'},
];

const messages = {
  logout: 'You have been logged out',
  authorization: 'You need to be authenticated to access this page',
  dataUserIncorrect: 'Incorrect data'
}

export {
  mainMenu,
  messages
}
