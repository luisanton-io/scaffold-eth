import React, { useState, useEffect } from 'react'
import { Terminal } from '../../gameItems/components'
import { connectController as wrapGlobalGameData } from '../../gameItems'

import { ContractWindow, ExplanationWindow } from './components'
import levelDialog from './dialog'

export const LEVEL_ID = 'GamblingContract'

const GamblingContract = ({ dialog, globalGameActions }) => {
  useEffect(() => {
    // load level
    globalGameActions.level.setCurrentLevel({ levelId: LEVEL_ID })
    // set initial level background
    globalGameActions.background.setCurrentBackground({ background: 'DiceGame' })
    // set dialog
    globalGameActions.dialog.initDialog({
      initialDialogPathId: `${LEVEL_ID}/Start`,
      currentDialog: levelDialog
    })
    // show terminal
    globalGameActions.terminal.showTerminal()
  }, [])

  const [contractWindowIsVisible, setContractWindowVisibility] = useState(false)
  const [explanationWindowIsVisible, setExplanationWindowVisibility] = useState(false)

  return (
    <div id='gamblingContract'>
      <Terminal
        initTop={window.innerHeight - 840}
        initLeft={window.innerWidth - 530}
        globalGameActions={globalGameActions}
        setContractWindowVisibility={setContractWindowVisibility}
        setExplanationWindowVisibility={setExplanationWindowVisibility}
      />

      <ContractWindow isOpen={contractWindowIsVisible} />

      <ExplanationWindow
        isOpen={explanationWindowIsVisible}
        globalGameActions={globalGameActions}
        setContractWindowVisibility={setContractWindowVisibility}
        setExplanationWindowVisibility={setExplanationWindowVisibility}
      />
    </div>
  )
}

export default wrapGlobalGameData(GamblingContract)