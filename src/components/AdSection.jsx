import React, { useEffect, useState } from 'react'
import api from '../services/api';

function AdSection() {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await api.get('/api/advertisements');
                console.log(response, "response>>");
                if (response.data && Array.isArray(response.data) && response.data.length > 0) {
                    setAds(response.data);
                } else {
                    throw new Error('No advertisements available...');
                }
            } catch (error) {
                setError(error.message || 'An error occurred while fetching advertisements');
            } finally {
                setLoading(false);
            }
        };

        fetchAds();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (ads.length === 0) {
        return <div>No advertisements available...</div>;
    }
    return (
        <section>
            {ads.map((ad) => (
                <div
                    key={ad.id}
                    className="flex justify-between bg-white p-6 rounded-lg mb-4"
                    style={{
                        boxShadow: 'rgb(147 184 209 / 30%) 0px 1px 2px 0px, rgb(133 133 133 / 15%) 0px 2px 6px 2px',
                    }}
                >
                    <div className="flex flex-col px-40 justify-end">
                        <h3 className="md:text-2xl text-xl font-semi-bold text-[#333333] pb-2">
                            {ad.title}
                        </h3>
                        <p className="text-sm text-[#667085] mb-6">
                            Dellas, Texas <span className="text-[#524EB7]">• 24hrs ago</span>
                        </p>
                        <p className="md:text-2xl text-xl font-semibold text-[#333333] mt-2 mb-8">
                            ${ad.price}
                        </p>
                    </div>
                    <div className="flex space-x-4 align-top items-start">
                        <button className="px-6 py-4 bg-white text-[#667085] rounded-full border hover:bg-gray-200">
                            View
                        </button>
                        <button className="px-4 py-4 bg-[#F50963] text-white rounded-full hover:bg-pink-600">
                            Edit Ad
                        </button>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default AdSection