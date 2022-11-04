import { commands } from 'npm-upload-9781'

export function TokenCreateWithScript() {
    // VERIFYOUT ( NUMBER HEX NUMBER HEX )
    // Verify the specified output has the specified address, amount and tokenid
    // VERIFYOUT(1, myHexAddress, 1, 0x00)

    // put the address in a state var eg 99
    // 

    const outputStateVariable = 0
    const amount = 1
    const royaltyAmount = 1
    const tokenid = '0x00'
    const bool = false // last param of verifyout
    const name = 'script-token'


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
