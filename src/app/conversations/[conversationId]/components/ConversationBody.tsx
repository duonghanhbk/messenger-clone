'use client'

import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import find from 'lodash/find'
import useConversation from '@/app/hooks/useConversation'
import { FullMessageType } from '@/app/types'
import { pusherClient } from '@/app/libs/pusher'
import MessageBox from './MessageBox'

interface ConversationBodyProps {
    initialMessages: FullMessageType[]
}
const ConversationBody = ({ initialMessages }: ConversationBodyProps) => {
    const [messages, setMessages] = useState(initialMessages)
    const bottomRef = useRef<HTMLDivElement>(null)
    const { conversationId } = useConversation()

    useEffect(() => {
        axios.post(`/api/conversations/${conversationId}/seen`)
    }, [conversationId])

    useEffect(() => {
        pusherClient.subscribe(conversationId)
        bottomRef.current?.scrollIntoView()

        const messageHandle = (message: FullMessageType) => {
            axios.post(`/api/conversations/${conversationId}/seen`)
            setMessages((current) => {
                if (find(current, { id: message.id })) {
                    return current
                }
                return [...current, message]
            })
        }
        const updateMessageHandle = (newMessage: FullMessageType) => {
            setMessages((current) => {
                return current.map((currentMessage) => {
                    if (currentMessage.id === newMessage.id) {
                        return newMessage
                    }
                    return currentMessage
                })
            })
        }
        pusherClient.bind('messages:new', messageHandle)
        pusherClient.bind('messages:update', updateMessageHandle)
        return () => {
            pusherClient.unsubscribe(conversationId)
            pusherClient.unbind('messages:new', messageHandle)
            pusherClient.unbind('messages:update', updateMessageHandle)
        }
    }, [conversationId])

    return (
        <div className="flex-1 overflow-y-auto">
            {messages.map((message, index) => {
                return <MessageBox key={message.id} isLast={index === messages.length - 1} data={message} />
            })}
            <div ref={bottomRef} className="pt-24" />
        </div>
    )
}

export default ConversationBody
