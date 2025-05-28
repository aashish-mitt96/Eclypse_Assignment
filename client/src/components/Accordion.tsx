import { ChevronDown } from 'lucide-react';

export default function Accordion() {
    const containerTop = 3946;
    const containerLeft = 100;
    const containerWidth = 1342;

    // Adjust top relative to container top
    const sections = [
        { title: "Size & Fit", titleTop: 0, borderTop: 78, iconTop: -3.2 },
        { title: "Delivery & Returns", titleTop: 153, borderTop: 231, iconTop: 146.8 },
        { title: "How This Was Made", titleTop: 306, borderTop: 384, iconTop: 296.8 },
    ];

    return (
        <div
            className="absolute text-white"
            style={{
                top: `${containerTop}px`,
                left: `${containerLeft}px`,
                width: `${containerWidth}px`,
                fontFamily: 'Neue Montreal, sans-serif',
                fontWeight: 400,
            }}
        >
            {sections.map((section, index) => (
                <div key={index} className="relative">
                    {/* Title */}
                    <div
                        className="text-[32px] leading-[1] tracking-[-0.02em] w-[800px] h-[38px] absolute"
                        style={{ top: `${section.titleTop}px`, left: 0 }}
                        role="heading"
                        aria-level={3}
                    >
                        {section.title}
                    </div>

                    {/* Chevron Icon */}
                    <div
                        className="absolute"
                        style={{ top: `${section.iconTop}px`, left: '1293.8px' }}
                        aria-hidden="true"
                    >
                        <ChevronDown color="white" size={24} />
                    </div>

                    {/* Border Container */}
                    <div
                        className="absolute border border-[#3d3d3d]"
                        style={{ top: `${section.borderTop}px`, left: 0, width: `${containerWidth}px` }}
                    />
                </div>
            ))}
        </div>
    );
}
