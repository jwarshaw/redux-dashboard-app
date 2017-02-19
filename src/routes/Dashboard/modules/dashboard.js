// ------------------------------------
// Constants
// ------------------------------------
export const DASHBOARD_VISITS_COUNT = 'DASHBOARD_VISITS_COUNT'
export const DASHBOARD_ADD_ITEM = 'DASHBOARD_ADD_ITEM'
export const DASHBOARD_EDIT_ITEM = 'DASHBOARD_EDIT_ITEM'

// ------------------------------------
// Actions
// ------------------------------------
export function dashboardVisitIncrement (value = 1) {
  return {
    type    : DASHBOARD_VISITS_COUNT,
    payload : value
  }
}

export function dashboardAddItem (value) {
  return {
    type: DASHBOARD_ADD_ITEM,
    payload: value
  }
}

export function dashboardEditItem (value) {
  return {
    type: DASHBOARD_EDIT_ITEM,
    payload: value
  }
}

export const actions = {
  dashboardVisitIncrement,
  dashboardAddItem,
  dashboardEditItem
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
	[DASHBOARD_VISITS_COUNT]: (state, action) => { 
	  return Object.assign({}, state, {
	    visitsCount: state.visitsCount + action.payload
	  })
	},

	[DASHBOARD_ADD_ITEM]: (state, action) => { 
	  const mockedId = Math.floor(Date.now() / 1000)
	  const newItem = {
	    label: action.payload,
	    id: mockedId
	  }
	  return Object.assign({}, state, {
	    dashboardItems: [...state.dashboardItems, newItem]
	  })
	},

	[DASHBOARD_EDIT_ITEM]: (state, action) => { 
	  const newLabel = action.payload.val
	  const index = action.payload.editedItemIndex
	  let immutableDashboardItems = [...state.dashboardItems]
	  immutableDashboardItems[index].label = newLabel
	  return Object.assign({}, state, {
	    dashboardItems: immutableDashboardItems
	  })
	}
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  visitsCount: 0,
  dashboardItems: [
    {key: 0, label: 'Angular'},
    {key: 1, label: 'JQuery'},
    {key: 2, label: 'Polymer'},
    {key: 3, label: 'ReactJS'}
  ]
}

export default function dashboardReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
