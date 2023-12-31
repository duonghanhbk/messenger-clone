'use client'

import Image from 'next/image'
import Modal from '@/app/components/Modal'

interface ImageModalProps {
    isOpen?: boolean
    onClose: () => void
    src?: string | null
}
const ImageModal = ({ isOpen, onClose, src }: ImageModalProps) => {
    if (!src) return null

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="h-80 w-80">
                <Image alt="Image" className="object-cover" fill src={src} sizes="88" />
            </div>
        </Modal>
    )
}

export default ImageModal
