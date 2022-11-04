import { commands } from 'npm-upload-9781'

export function SendToken() {
    const address = 'MxG085GYM3CS19B3CCVDFTA3KANQC2R1EQU9E300S5KY83PWGW1PPCEJERJVQY1'
    const tokenid = '0xE3DE21231A6248FC8F62DB0894F85231804F5BBC0B0F9F519BA2BA40B8094007'
    const amount = 1
    const onSendTokenClicked = () => {
        commands.send({ address, amount, tokenid })
    }
    return (
        <>
            <button onClick={onSendTokenClicked}>send token</button>
            <br></br>
            <br></br>
        </>
    )
}
