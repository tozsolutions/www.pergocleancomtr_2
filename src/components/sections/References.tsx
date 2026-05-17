"use client";

import React from 'react';
import Lenis from 'lenis';
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { referencesData } from "@/assets";

export function References() {
    React.useEffect(() => {
        const lenis = new Lenis()
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])

    const images = referencesData.slice(0, 7).map(r => ({ src: r.img.src, alt: r.brand }));

    return (
        <section id="referanslar" className="relative overflow-hidden py-24">
            <div className="container relative mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center mb-14">
                    <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">Referanslarımız</div>
                    <h2 className="mt-3 text-balance text-4xl font-bold md:text-5xl">Öne Çıkan Çalışmalarımız</h2>
                </div>
                <ZoomParallax images={images} />
            </div>
        </section>
    );
}