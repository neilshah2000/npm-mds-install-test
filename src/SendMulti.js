import { commands, Decimal } from 'npm-upload-9781'

export function SendMulti() {
    const address = 'MxG083A97TCZ82K0KEM1CP9SV2Q97EJM808J4J28YPCVZJRRU6YWPZHS2NQCY31'
    const amount = new Decimal(0.001)
    const multi = [
        { address, amount },
        { address, amount },
        { address, amount },
        { address, amount },
        { address, amount },
    ]
    const onSendClicked = () => {
        commands.send({ multi }).then(console.log)
    }
    return (
        <>
            <button onClick={onSendClicked}>send multi</button>
            <br></br>
            <br></br>
        </>
    )
}
