'use client'

import { User } from '@prisma/client'
import Image from 'next/image'

const Avatar = ({ user }: { user: User | null }) => {
    return (
        <div className="relative">
            <div className="relative inline-block h-9 w-9 overflow-hidden rounded-full md:h-11 md:w-11">
                <Image alt="Avatar" src={user?.image || '/images/placeholder.jpeg'} fill />
            </div>
        </div>
    )
}

export default Avatar
