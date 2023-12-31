import getConversationById from '@/app/actions/getConversationById'
import getMessages from '@/app/actions/getMessages'
import EmptyState from '@/app/components/EmptyState'
import ConversationHeader from './components/ConversationHeader'
import ConversationBody from './components/ConversationBody'
import ConversationForm from './components/ConversationForm'

interface IParams {
    conversationId: string
}

const ConversationId = async ({ params }: { params: IParams }) => {
    const conversation = await getConversationById(params.conversationId)
    const messages = await getMessages(params.conversationId)

    if (!conversation) {
        return (
            <div className="h-full lg:pl-80">
                <div className="flex h-full flex-col">
                    <EmptyState />
                </div>
            </div>
        )
    }
    return (
        <div className="h-full lg:pl-80">
            <div className="flex h-full flex-col">
                <ConversationHeader conversation={conversation} />
                <ConversationBody initialMessages={messages} />
                <ConversationForm />
            </div>
        </div>
    )
}

export default ConversationId
