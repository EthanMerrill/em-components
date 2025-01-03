// src/components/Card.tsx
import React from 'react';
import svg from 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg'

export interface SignatureFooterProps {
    backgroundColor: string;
    fontColor: string;
}

interface siteLinks {
    siteName: string;
    siteLink: string;
}

// a lightweight component which contains links to my other work
const SignatureFooter: React.FC<SignatureFooterProps> = ({ backgroundColor, fontColor }) => {

    const style = {
        backgroundColor: backgroundColor,
        color: fontColor,
        padding: "1rem",
        textAlign: "center",
        width: "100%"
    };

    const sites: siteLinks[] = [
        { siteName: "JamSort", siteLink: "jamsort.com" },
        { siteName: "What Genre is This", siteLink: "whatgenreisthis.com" },
        { siteName: "The Recipes Only", siteLink: "therecipesonly.com" }
    ];



    return (
        <div style={{ backgroundColor: backgroundColor, color: fontColor, padding: "1rem", textAlign: "center", width: "100%" }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                <div style={{ textAlign: 'left' }}><p>Made with ♡ by <a href='ethanmerrill.com'>Ethan Merrill</a> in Boston, Massachusetts USA</p></div>
                <div>
                    {sites.map(site => (
                        <li key={site.siteName} style={{ marginRight: '1rem', listStyleType: 'none', display: 'inline-block' }}>
                            <a href={site.siteLink}>{site.siteName}</a>
                            {sites.indexOf(site) !== sites.length - 1 && (
                                <span style={{ marginLeft: '1rem', display: 'inline-block', fontFamily: 'franklin' }}>/</span>
                            )}
                        </li>))}
                </div>
                <div style={{ width: '30px', height: '30px' }}>
                    <a href='https://bsky.app/profile/ethanmerrill.bsky.social'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 530" width="100%" height="100%" version="1.1">
                            <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill={fontColor} />
                        </svg>
                    </a>
                </div>
                <div style={{ width: '30px', height: '30px' }}>
                    <a href='https://www.linkedin.com/in/ethanmerrill/'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 72 72" width="100%"><g fill="none" fill-rule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" stroke={"none"} /><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill={fontColor} /></g></svg>
                    </a>
                </div>
            </div>
        </div >
    );
};

export default SignatureFooter;
