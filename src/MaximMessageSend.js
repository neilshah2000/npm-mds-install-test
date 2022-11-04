import { commands } from 'npm-upload-9781'

export function MaximaMessageSend() {
    const action = 'send'
    const contact = 'MxG18HGG6FJ038614Y8CW46US6G20810K0070CD00Z83282G60G1F6YW1UZ77FKKZAMGJV29UH4QZPBASUFYDD7RMHHC2G2PY7P1CCVD0EH1MNEY2ZTAVHYTM551E76382VD1WVRW0W84UGGM0K1YB2T47AGRE9J35P9RQD8F8U4FUFMGSQRFRAPC1SRYAJ3A6VB0V862YF3G4UFJBFFM62EC0ZFHDBQSNQ9KRGWQQR09QF0TMBEP17CP5TZRYPNK10608004GTJ03K@75.119.159.35:9301'
    const application = 'test-application'
    const data = '74657374206d657373616765' // 'test message' in hex

    const onMaximMessageClicked = () => {
        commands.maxima({action, to:contact, application, data})
    }
    return (
        <>
            <button onClick={onMaximMessageClicked}>maxima message</button>
            <br></br>
            <br></br>
        </>
    )
}
