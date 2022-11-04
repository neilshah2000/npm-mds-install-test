import { commands, Decimal } from 'npm-upload-9781'

export function SendPoll() {
    const action = 'add'
    const address = 'MxG083A97TCZ82K0KEM1CP9SV2Q97EJM808J4J28YPCVZJRRU6YWPZHS2NQCY31'
    const amount = new Decimal('0.0000000000000000000000000000001')
    const burn = new Decimal('0.588998047999999999999999999999799997')
    const dryrun = true

    const onSendClicked = () => {
        commands.sendpoll({ action, address, amount, burn, dryrun }).then(console.log)
    }
    return (
        <>
            <button onClick={onSendClicked}>sendpoll</button>
            <br></br>
            <br></br>
        </>
    )
}
