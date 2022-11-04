import { commands } from 'npm-upload-9781'

export function TokenCreate() {
    const name = 'test-token'
    const amount = '1'

    const onTokenCreateClicked = () => {
        commands.tokencreate({name, amount})
    }
    return (
        <>
            <button onClick={onTokenCreateClicked}>token create</button>
            <br></br>
            <br></br>
        </>
    )
}
