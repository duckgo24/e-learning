

export function SearchIcon({ size = 24, color = "currentColor" }) {
    return (
        <svg
            aria-label="Search"
            height={size}
            color={color}
            role="img"
            viewBox="0 0 24 24"
            width={size}
        >
            <title>Search</title>
            <path
                d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="16.511"
                x2="22"
                y1="16.511"
                y2="22"
            />
        </svg>
    );
}