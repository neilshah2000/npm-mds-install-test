import { commands } from 'npm-upload-9781'

export function TransactionCreateBuildPost() {
    const id = 'test-id-82iu3ybknbf8u'
    const tokenid = '0xE3DE21231A6248FC8F62DB0894F85231804F5BBC0B0F9F519BA2BA40B8094007' // send token
    


    commands.txncreate({id})

    // create 2 inputs, 1 for the token, 1 for the minima payment
    // create 2 outputs, 1 for tokenm 1 fore minima (dont worry about change for now)

    commands.txninput({id, })


    const generateScriptString = (myAddress) => {
        return `"RETURN VERIFYOUT(${outputStateVariable} ${myAddress} ${royaltyAmount} ${tokenid} ${bool})"`
    }

    const getMyAddress = async () => {
        const response = await commands.newaddress()
        console.log('my address', response.address)
        return response.address
    }

    const onTokenCreateClicked = async () => {
        const myAddress = await getMyAddress()
        const scriptString = generateScriptString(myAddress)
        console.log('scriptString >>>', scriptString)
        commands.tokencreate({name, amount, script:scriptString})
        // tokencreate name:script-token amount:1  script:"RETURN VERIFYOUT(0 0xA13EBBF888EB984C2AEE444128CEA67DBEAC7FDCC252C91448FF929A6FF52C74 1 0x00 false)"
    }
    return (
        <>
            <button onClick={onTokenCreateClicked}>token create script</button>
            <br></br>
            <br></br>
        </>
    )
}
