import React from 'react'
import { connect } from 'react-redux'
import { BusyKind, IState } from '../../common/types'
import Icon from './Icon'
import __ from '../../locales'

import './BusyOverlay.less'

interface IBusyOverlayProps {
  importing: boolean
  saving: boolean
}

function BusyOverlay({ importing, saving }: IBusyOverlayProps) {
  if (!importing && !saving) return null

  return (
    <div className="busy-overlay" role="status" aria-live="assertive">
      <div className="busy-overlay-card">
        <Icon name="color" className="-spin" />
        <span>{saving ? __('saving_images') : __('importing_images')}</span>
      </div>
    </div>
  )
}

export default connect((state: IState) => ({
  importing: state.globals.busy[BusyKind.IMPORT] > 0,
  saving: state.globals.busy[BusyKind.SAVE] > 0,
}))(BusyOverlay)
