function Hire() {
    return (
        <div clasName="mx-20 mt-8 flex items-center justify-between rounded-xl bg-[#222222] p-6 text-[#FAF3E1]">
            <div>
                <h3 className="text-3xl font-bold">Hire Me for hours{hours}</h3>
                <p className="mt-1 text-xl"> Total</p>
                <span className="font-bold text-[#FA8112]">PHP {hours * props.rate}</span>
            <div>
        </div>
        <div className="flex gap-4">
            <button className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
            onClick={handleAddhour}>Add hour</button>
            <button className="cursor-pointer rounded-lg border-2 border-[#FAF3E1] px-8 py-3 text-xl font-bold"
            onClick={handleClear}>Clear</button>
        </div>


    )
}