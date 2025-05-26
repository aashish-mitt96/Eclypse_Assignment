import { ChevronDown } from 'lucide-react';

export default function Accordion() {
    const sections = [
        {
            title: "Size & Fit",
            titleTop: "3946px",
            borderTop: "4024px",
            iconTop: "3942.8px",
        },
        {
            title: "Delivery & Returns",
            titleTop: "4099px",
            borderTop: "4177px",
            iconTop: "4092.8px",
        },
        {
            title: "How This Was Made",
            titleTop: "4252px",
            borderTop: "4330px",
            iconTop: "4242.8px",
        },
    ];

    return (
        <>
            {sections.map((section, index) => (
                <div key={index}>
                    {/* Title */}
                    <div
                        className="absolute text-white"
                        style={{
                            width: "800px",
                            height: "38px",
                            top: section.titleTop,
                            left: "50px",
                            fontFamily: "Neue Montreal",
                            fontWeight: 400,
                            fontSize: "32px",
                            lineHeight: "100%",
                            letterSpacing: "-2%",
                        }}
                        role="heading"
                        aria-level={3}
                    >
                        {section.title}
                    </div>

                    {/* Chevron Icon */}
                    <div
                        className="absolute"
                        style={{
                            top: section.iconTop,
                            left: "1339.8px",
                        }}
                        aria-hidden="true"
                    >
                        <ChevronDown color="white" size={24} />
                    </div>

                    {/* Border Container */}
                    <div
                        className="absolute border"
                        style={{
                            width: "1342px",
                            top: section.borderTop,
                            left: "50px",
                            borderColor: "rgba(61, 61, 61, 1)",
                            borderWidth: "1px",
                        }}
                    >
                        {/* Static content placeholder */}
                    </div>
                </div>
            ))}
        </>
    );
}
