import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#ffffff"
        foregroundColor="#ecebeb"
    >
        <rect x="81" y="35" rx="0" ry="0" width="0" height="1" />
        <circle cx="140" cy="124" r="124" />
        <rect x="0" y="272" rx="10" ry="10" width="280" height="27" />
        <rect x="0" y="315" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="428" rx="10" ry="10" width="85" height="27" />
        <rect x="128" y="420" rx="20" ry="20" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton;