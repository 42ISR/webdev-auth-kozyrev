import { useEffect, useState } from "react"
import Feed from "../components/Feed"
import MessageField from "../components/MessageField"
import { api } from "../api/api"
import { useUserStore } from "../store/useUserStore"
import { useMessageStore } from "../store/useMessageStore"

const MyMessages = () => {
    const { user } = useUserStore()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const { messages, getMessages} = useMessageStore()
    useEffect(() => {
        const load = async () => {
            setError(null)
            setIsLoading(true)
            try {
               await getMessages(true)            
            } catch (error) {
                console.error(error)
            } finally{
                setIsLoading(false)
            }
        }
        load()
    }, [])
    return <Feed messages={messages} title="Мои сообщения" />
}

export default MyMessages
