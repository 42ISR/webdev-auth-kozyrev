import { api } from "../api/api"
import { useMessageStore } from "../store/useMessageStore"
import { useUserStore } from "../store/useUserStore"

const MessageCard = ({ likes, content, username, createdAt, id, userId, likedBy }) => {
    const {getMessages} = useMessageStore()
    const { user } = useUserStore()

    const handleDelete = async () => {
        await api.deleteMessage(id)
        getMessages()
    }
    
    const handleLike = async () => {
        await api.likeMessage(id)
        getMessages()

    }

    const handleReport = async () => {
        await api.reportMessage(id)
        getMessages()
    }

    const ifLiked = likedBy.includes(user?.user.id)

    return (
        <div className="message-card">
            <div className="message-content">{content}</div>
            <div className="message-meta">
                <span className="message-author">@{username}</span>
                <span className="message-time">{createdAt}</span>
            </div>
            <div className="message-actions">
                {user &&
                <button className="action-button" onClick={handleLike}>
                    <span>{likes} {ifLiked ? "💗" : "🤍"}</span>
                    <span>Нравится</span>
                </button>
                }
                {user &&
                <button className="action-button" onClick={handleReport}>
                    <span>🚩</span>
                    <span>Пожаловаться</span>
                </button>
                }
                {user?.user.id === userId &&
                <button className="action-button delete" onClick={handleDelete}>
                    <span>❌</span>
                    <span>Удалить</span>
                </button>
                }
            </div>
        </div>
    )
}

export default MessageCard
