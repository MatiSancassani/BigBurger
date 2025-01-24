import React from 'react'

const Email = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder=""
                        className="border-b w-[20rem] border-gray-300 py-1 focus:border-b-2 focus:border-[#e99825] transition-colors focus:outline-none peer bg-inherit"
                    />
                    <label
                        for="email"
                        className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm"
                    >
                        E-mail
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Email