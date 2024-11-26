import React from "react";
import CardGrid from "../components/cardGrid";

const sampleData = [
    { name: "Alice", status: "Parent", pictureUrl: "./assets/placeholder.png" },
    { name: "Bob", status: "Child", pictureUrl: "./assets/placeholder.png" },
    { name: "Charlie", status: "Child", pictureUrl: "./assets/placeholder.png" },
    { name: "Diana", status: "Child", pictureUrl: "./assets/placeholder.png" },
]

const UserSelector = () => {
    return (
        <div>
            <h1>Welcome to family members</h1>
            <CardGrid items={sampleData} />
        </div>
    );
};

export default UserSelector;