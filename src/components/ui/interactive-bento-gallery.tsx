"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react';

interface MediaItemType {
    id: number;
    type: string;
    title: string;
    desc: string;
    url: string;
    span: string;
}

const MediaItem = ({ item, className, onClick }: { item: MediaItemType, className?: string, onClick?: () => void }) => {
    return (
        <img
            src={item.url}
            alt={item.title}
            className={`${className} object-cover cursor-pointer`}
            onClick={onClick}
            loading="lazy"
            decoding="async"
        />
    );
};

interface GalleryModalProps {
    selectedItem: MediaItemType;
    isOpen: boolean;
    onClose: () => void;
    setSelectedItem: (item: MediaItemType | null) => void;
    mediaItems: MediaItemType[];
}
const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: GalleryModalProps) => {
    const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 });

    if (!isOpen) return null;

    return (
        <>
            <motion.div
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="fixed inset-0 w-full min-h-screen z-50 backdrop-blur-lg flex items-center justify-center p-4"
            >
                <div className="relative w-full max-w-3xl h-auto max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
                    <img src={selectedItem.url} alt={selectedItem.title} className="w-full h-full object-contain" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white text-xl font-semibold">{selectedItem.title}</h3>
                        <p className="text-white/80 text-sm mt-1">{selectedItem.desc}</p>
                    </div>
                    <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/40" onClick={onClose}>
                        <X className='w-5 h-5' />
                    </button>
                </div>
            </motion.div>
        </>
    );
};

interface InteractiveBentoGalleryProps {
    mediaItems: MediaItemType[]
    title: string
    description: string
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ mediaItems, title, description }) => {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
    const [items] = useState(mediaItems);

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-white">{title}</h1>
                <p className="mt-2 text-gray-400">{description}</p>
            </div>
            <AnimatePresence mode="wait">
                {selectedItem ? (
                    <GalleryModal
                        selectedItem={selectedItem}
                        isOpen={true}
                        onClose={() => setSelectedItem(null)}
                        setSelectedItem={setSelectedItem}
                        mediaItems={items}
                    />
                ) : (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]"
                        initial="hidden"
                        animate="visible"
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`relative overflow-hidden rounded-xl cursor-pointer ${item.span}`}
                                onClick={() => setSelectedItem(item)}
                                whileHover={{ scale: 1.02 }}
                            >
                                <MediaItem item={item} className="w-full h-full" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                                    <h3 className="text-white font-medium">{item.title}</h3>
                                    <p className="text-white/70 text-xs">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default InteractiveBentoGallery;