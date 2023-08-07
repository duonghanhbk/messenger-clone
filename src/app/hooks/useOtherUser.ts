import { useSession } from 'next-auth/react'
import { useMemo } from 'react'
import { FullConversationType } from '../types'

const useOtherUser = (conversation: FullConversationType) => {
    const session = useSession()
    const otherUser = useMemo(() => {
        const currentUserEmail = session?.data?.user?.email
        return conversation.users.filter(user => user?.email !== currentUserEmail)
    }, [session?.data, conversation?.users])
    return otherUser[0]
}

export default useOtherUser