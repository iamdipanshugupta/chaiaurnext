import React from "react";

const ProductIdPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    return (
        <div>
            <h1>ProductIdPage {id}</h1>
        </div>
    );
};

export default ProductIdPage;
