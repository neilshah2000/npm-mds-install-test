import { commands, Decimal } from 'npm-upload-9781'

// similar to multi option on the send command
// multi sends to multiple addresses
// split sends to a single one
export function SendSplit() {
    const address = 'MxG083A97TCZ82K0KEM1CP9SV2Q97EJM808J4J28YPCVZJRRU6YWPZHS2NQCY31'
    const amount = new Decimal(1.1)
    const split = 10

    const onSendClicked = () => {
        commands.send({ address, amount, split }).then(console.log)
    }
    return (
        <>
            <button onClick={onSendClicked}>send split</button>
            <br></br>
            <br></br>
        </>
    )
}
