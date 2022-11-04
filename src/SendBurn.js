import { commands, Decimal } from 'npm-upload-9781'

export function SendBurn() {
    const address = 'MxG083A97TCZ82K0KEM1CP9SV2Q97EJM808J4J28YPCVZJRRU6YWPZHS2NQCY31'
    const amount = new Decimal(0.001)
    const burn = new Decimal('0.000000976')

    const getBalanceDecimal = async () => {
        const bal = await commands.balance()
        const minima = bal.find((coin) => (coin.tokenid = '0x00'))
        if (typeof minima === undefined) {
            console.error('no minima token')
            return 0
        } else {
            return new Decimal(minima.confirmed).plus(new Decimal(minima.unconfirmed))
        }
    }

    const onSendClicked = async () => {
        const startBalance = await getBalanceDecimal()
        const endBalance = startBalance.minus(amount).minus(burn)
        console.log('end balance should be: ' + endBalance.toString())
        commands.send({ amount, address, burn }).then(console.log)
    }
    return (
        <>
            <button onClick={onSendClicked}>send burn</button>
            <br></br>
            <br></br>
        </>
    )
}
