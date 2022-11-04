import { commands, Decimal } from 'npm-upload-9781'

export function SendDryrun() {
    const address = 'MxG083A97TCZ82K0KEM1CP9SV2Q97EJM808J4J28YPCVZJRRU6YWPZHS2NQCY31'
    const amount = new Decimal('0.0000000000000000000000000000001')
    const dryrun = true

    const onSendClicked = () => {
        commands.send({ address, amount, dryrun }).then(console.log)
    }
    return (
        <>
            <button onClick={onSendClicked}>send dryrun</button>
            <br></br>
            <br></br>
        </>
    )
}
