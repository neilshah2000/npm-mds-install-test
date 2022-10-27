import { useEffect, useState } from 'react'
import { commands, events, Coin, MDS, Decimal } from 'npm-upload-9781'
import { Send } from './Send'
import { SendMulti } from './SendMulti'

MDS.DEBUG_HOST = '127.0.0.1'
MDS.DEBUG_PORT = 10003
MDS.DEBUG_MINIDAPPID = '0xB2EFB3C7F9AD93EB0800A9B64ADDBABA43DF2DE21267D0F836359EA046E89A2D'

function App() {
    const [minimaBalance, setMinimaBalance] = useState('')

    useEffect(() => {
        // Decimal.js is used to handle floating point numbers
        Decimal.set({ precision: 60 })
        // initialize minima before calling any commands
        events.onInit(async () => {
            const balance = await commands.balance()
            const balanceString = JSON.stringify(balance, null, 2)
            setMinimaBalance(balanceString)
        })
        // dont't call MDS directly because we have commands, events and sql helpers,
        // but it's still there if you need an escape hatch
        MDS.init((event) => {
            // console.log(event)
            if (event.event === 'inited') {
                MDS.cmd('balance', (res) => {
                    console.log('minima cmd called directly', res)
                })
            }
        })
        return
    }, [])

    return (
        <div>
            <h1></h1>
            <h3>Minima Balance</h3>
            <p>{minimaBalance}</p>

            <Send></Send>
            <SendMulti></SendMulti>
        </div>
    )
}

export default App
