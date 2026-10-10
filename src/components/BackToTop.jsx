import { useEffect, useRef } from "react";

const BackToTop = () => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!buttonRef.current) return;

            buttonRef.current.style.display = window.scrollY < 300 ? "none" : "flex";
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function backToTop() {
        if (window.scrollY < 300) {
            console.log("Already in top");
            return;
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <button
            ref={buttonRef}
            onClick={backToTop}
            style={{ display: "none" }}
            className="fixed flex items-center justify-center cursor-pointer bg-stone-200 w-13 h-13 rounded-full bottom-5 right-5 z-50"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
        </button>
    );
};

export default BackToTop