import { SIDEPANEL_CLOSE, SIDEPANEL_OPEN } from '../../types'

export function sidePanelClose() {
  return {
    type: SIDEPANEL_CLOSE,
  }
}

export function sidePanelOpen() {
  return {
    type: SIDEPANEL_OPEN,
  }
}
