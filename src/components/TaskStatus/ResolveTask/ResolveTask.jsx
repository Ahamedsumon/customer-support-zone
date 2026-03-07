

const ResolveTask = ({resolved}) => {

    return (
        <div>
            <div>
                    <h2 className="text-2xl my-4 text-[#34485A] font-semibold">Resolved Task</h2>
                    {
                        resolved.length < 1 ? "No resolved task yet" : ""
                    }
                    {
                        resolved.map(resolve => <p className="bg-[#E0E7FF] p-3 rounded shadow mb-2" key={resolve.id}>{resolve.title}</p>)
                    }
            </div>
        </div>
    );
};

export default ResolveTask;