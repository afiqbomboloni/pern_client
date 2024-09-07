import { useEffect, useState } from "react"

const useSnap = () => {
    const [snap, setSnap] = useState(null)
    useEffect(() => {
        const myMidtransClientKey = "SB-Mid-client-rL68zuhsO2QH9vZI"
        const script = document.createElement("script")
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js"
        script.setAttribute("data-client-key", myMidtransClientKey)
        script.onload = () => {
            setSnap(window.snap)
        }
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const snapEmbed = (snap_token, embedId,action) => {
        if(snap) {
            snap.embed(snap_token, {
                embedId,
                onSuccess: function(result){
                    console.log("success", result)
                    action.onSuccess()
                },
                onPending: function(result){
                    console.log("pending", result)
                    action.onPending()
                },
                onClose: function(){
                    console.log("customer closed the popup without finishing the payment")
                    action.onClose()
                },
            })
        }
    }

    return {snapEmbed}
}

export default useSnap