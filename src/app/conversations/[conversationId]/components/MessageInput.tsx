'use client'

import { FieldValues, UseFormRegister } from 'react-hook-form'

interface MessageInputProps {
    id: string
    placeholder?: string
    type?: string
    required?: boolean
    register: UseFormRegister<FieldValues>
}
const MessageInput = ({ id, placeholder, type, required, register }: MessageInputProps) => {
    return (
        <div className="relative w-full">
            <input
                id={id}
                autoComplete={id}
                type={type}
                {...register(id, { required })}
                placeholder={placeholder}
                className="w-full rounded-full bg-neutral-100 px-4 py-2 font-light text-black focus:outline-none"
            />
        </div>
    )
}

export default MessageInput
