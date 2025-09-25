import React from 'react'
import { Dialog } from 'primereact/dialog';

const NoteModel = ({ closeModel }) => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const response = await axios.post(
                "http://localhost:3000/api/note/add",
                { title, description }
            );

            if (response.data.success) {
                navigate("/");
                closeModel();
            } else {
                setError(response.data.message || "Something went wrong!");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Server error, try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='fixed inset-0 bg-gray-300 bg-opacity-75 flex justify-center items-center'>
                <div className='bg-white p-8 rounded-2xl'>
                    <h2 className='text-xl font-bold mb-4'>Add new Note</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Note Title'
                            className='border p-2 w-full mb-4 rounded focus:ring-1 focus:ring-teal-400 focus:outline-none'
                        />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Note Description'
                            className='border p-2 h-60 w-full mb-4 rounded focus:ring-1 focus:ring-teal-400 focus:outline-none'
                        />

                        <div className='flex justify-end'>
                            <button
                                type='submit'
                                className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer mr-2'
                            >
                                Add Note
                            </button>

                            <button
                                className='bg-gray-200 hover:bg-gray-300 py-2 px-4 text-red-500 rounded cursor-pointer'
                                onClick={closeModel}
                            >Cancel
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default NoteModel