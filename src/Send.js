import { commands, Decimal } from 'npm-upload-9781'

export function Send() {
    const address = '0x365849093D1D03BF6ACAE846A4294D2826712B494E2442464408D6457211BC8A'
    const amount = new Decimal(0.001)
    const onSendClicked = () => {
        commands.send({ address, amount })
    }
    return (
        <>
            <button onClick={onSendClicked}>send</button>
            <br></br>
            <br></br>
        </>
    )
}
