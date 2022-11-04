import { commands } from 'npm-upload-9781'

export function TransactionCreateBuildPost() {
    const id = 'test-id-82iu3ybknbf8u-' + Date.now()
    const tokenId = '0x70C5BFF8131ABFABDB8F52054E56303C6481AC9101408B8632C1C2306F2AC630' // send token
    const myTokenCoinId = '0x7BEECF8D9FFE07E3880F998C23132947678935047103E085687E44945906DFD5'
    const royaltyCoinId = '0xD55034F08C7B5A73131A3640CE9C8E95C26F25C30406BD5FD324F026F8093F70'
    const tokenSendAddress = '0x8F1E41CE54EE79735D42F00CDB9E98A72E1DA33BA6B080745F78D453FD31ECDB'
    const royaltySendAddress = '0x814245B6BA88FE90A1AA2497BC4EF9B394CFB00DEA3B7A2F4237F97B390C50E6'

    const createBuildPostTransaction = async () => {
        await commands.txncreate({ id })

        // create 2 inputs, 1 for the token, 1 for the minima payment (royalty)
        // create 2 outputs, 1 for token, 1 for minima (dont worry about change for now)

        await commands.txninput({ id, coinid: royaltyCoinId, scriptmmr: true })
        await commands.txninput({ id, coinid: myTokenCoinId, scriptmmr: true })

        await commands.txnoutput({ id, amount: 1, address: royaltySendAddress, tokenId: '0x00' }) // script expecting the royalty output to be index [0]
        await commands.txnoutput({ id, amount: 1, address: tokenSendAddress, tokenId })

        await commands.txnsign({ id, publicKey: 'auto' })

        const myTxn = await commands.txnlist({ id })
        console.log('myTxn', myTxn)

        await commands.txncheck({ id })
        await commands.txnpost({ id })
    }

    return (
        <>
            <button onClick={createBuildPostTransaction}>create build post transaction</button>
            <br></br>
            <br></br>
        </>
    )
}
