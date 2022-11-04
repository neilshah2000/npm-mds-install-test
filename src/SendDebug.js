import { commands, Decimal } from 'npm-upload-9781'

export function SendDebug() {
    const address = 'MxG083A97TCZ82K0KEM1CP9SV2Q97EJM808J4J28YPCVZJRRU6YWPZHS2NQCY31'
    const amount = new Decimal('0.00000000000000000000000000000010000000')

    const debug = true

    const onSendClicked = () => {
        console.log(amount.toString())
        commands.send({ address, amount, debug }).then(console.log)
    }
    return (
        <>
            <button onClick={onSendClicked}>send debug</button>
            <br></br>
            <br></br>
        </>
    )
}
