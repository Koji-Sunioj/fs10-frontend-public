import { SIDEPANEL_CLOSE, SIDEPANEL_OPEN, SidePanelState } from '../../types'

const initialState: SidePanelState = { collapsed: true }

export default function sidepanel(
  state = initialState,
  action: { type: string }
) {
  switch (action.type) {
  case SIDEPANEL_CLOSE: {
    return { ...state, collapsed: true }
  }

  case SIDEPANEL_OPEN: {
    return { ...state, collapsed: false }
  }

  default:
    return state
  }
}
