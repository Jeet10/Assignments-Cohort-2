

export const RevenueCard = ({
    title,
    showWarning,
    orderCount,
    amount }) => {
    return (
        <div className="bg-white rounded shadow-md hover:bg-red-300">
            <div className="flex p-2">
                <div className="text-md text-gray-700 ml-1">
                    {title}
                </div>
                <div className="mt-1 ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer w-5 h-5 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between pt-2 ml-3">
                <div className="font-bold text-2xl pb-3">
                    ${amount}
                </div>
                {orderCount ? (
                    <div className="flex cursor-pointer text-blue-700 underline font-medium flex flex-col jutify-center">
                        <div className="flex">
                            <div className="text-blue-700">
                                {orderCount} Order(s)
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
