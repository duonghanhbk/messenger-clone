import Sidebar from '@/app/components/sidebar/Sidebar'
import getConversations from '@/app/actions/getConversations'
import ConversationList from './components/ConversationList'
import getUsers from '@/app/actions/getUsers'

export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
    const conversations = await getConversations()
    const users = await getUsers()
    return (
        <Sidebar>
            <div className="h-full">
                <ConversationList initialItems={conversations} users={users} />
                {children}
            </div>
        </Sidebar>
    )
}
