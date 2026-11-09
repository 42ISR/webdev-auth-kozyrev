import { useEffect, useState } from "react"
import Feed from "../components/Feed"
import MessageField from "../components/MessageField"
import { api } from "../api/api"
import { useUserStore } from "../store/useUserStore"

const Board = () => {
    const { user } = useUserStore()
    const { message, getMessages} = useMessageStore()
    useEffect(() => {
        getMessages()
    }, [])

    return (
        <>
            <h1>Board</h1>
            {user && <Messagefield />}
            <MessageField />
            <Feed messages={messages} title="Последние сообщения" />
        </>
    )
}

export default Board
