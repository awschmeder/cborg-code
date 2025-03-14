import React from 'react'
import type { Command } from '../commands'
import { Doctor } from '../screens/Doctor'

const doctor: Command = {
  name: 'doctor',
  description: 'Checks the health of your CBorg Code installation',
  isEnabled: true,
  isHidden: false,
  userFacingName() {
    return 'doctor'
  },
  type: 'local-jsx',
  call(onDone) {
    const element = React.createElement(Doctor, {
      onDone,
      doctorMode: true,
    })
    return Promise.resolve(element)
  },
}

export default doctor
