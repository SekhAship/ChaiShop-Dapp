import React, { useEffect, useState } from 'react'

const Memos = ({state}) => {
    const [memos,setMemos]=useState([]);
    const {contract} = state;


    useEffect(() => {
       const memoMessage = async () => {
        const memos = await contract.getMemos();
        setMemos(memos);
         };
         contract && memoMessage();

    }, [contract]);
  return (
<div className="justify-content-center mt-5">
    <h3 className="text-primary">Messages</h3>
    <table className="table table-striped table-bordered mt-4">
        <thead className="table-dark">
            <tr>
                <th>Name</th>
                <th>Message</th>
                <th>Timestamp</th>
                <th>From</th>
            </tr>
        </thead>
        <tbody>
            {memos.map((memo, index) => (
                <tr key={memo.timestamp}>
                    <td className="text-success fw-bold">{memo.name}</td>
                    <td>{memo.message}</td>
                    <td>{String(memo.timestamp)}</td>
                    <td className="text-info">{memo.from}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

  )
}

export default Memos
