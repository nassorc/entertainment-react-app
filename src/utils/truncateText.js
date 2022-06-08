import { Link } from 'react-router-dom';
export const truncateText = (s, n, l) => {
    if (s.length < n) {
        return s
    }
    return (
        <>
        <span>{s.slice(0, n)}</span> <Link to={l}>'... Read More'</Link>
        </>
    )
}