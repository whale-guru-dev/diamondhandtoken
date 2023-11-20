import React from 'react';

const StakingCategory = () => {
    return (
        <div className="staking-category">
            {categoryData.map((item) => (
                <div className="category-item" key={item.id}>
                    <div>
                    <p>{item.title}</p>
                    <div className="h3">{item.number}</div>
                    <span>${item.price}</span> 
                    </div>
                </div>
            ))}
            <div className="category-item">
                <div>
                    <div className="category-button">
                        <button>Compound</button>
                        <button>Claim</button>
                    </div>
                    <div className="category-text">
                        When a user deposits their tokens into the staking contract the initial deposit cannot be unlocked. The user will then receive 1% per day for 365 days. 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StakingCategory;

const categoryData = [
    {
        id: 0,
        title: "My DHS Stake",
        number: "23,384.77",
        price: "47,858.12",
    },
    {
        id: 1,
        title: "Unclaimed Rewards",
        number: "456.87",
        price: "211.49",
    },
    {
        id: 2,
        title: "Claimed Rewards",
        number: "2,356.87",
        price: "3812.55",
    },
    {
        id: 3,
        title: "Max Payout",
        number: "50,000.00",
        price: "96,228.12",
    }
]