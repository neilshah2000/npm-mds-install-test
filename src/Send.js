import { commands, Decimal } from 'npm-upload-9781'

export function Send() {
    const address = 'MxG083A97TCZ82K0KEM1CP9SV2Q97EJM808J4J28YPCVZJRRU6YWPZHS2NQCY31'
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
