
import {db} from '../config/firestore';
import{useFormInput} from './hooks';
function CreatePost(props) {
    const title=useFormInput('');
    const content=useFormInput('');
    const subtitle=useFormInput('');
    function handleSubmit(e){
        e.preventDefault();
        console.log('title',title);
        console.log('subtitle',subtitle);
        console.log('con',content);

        db.collection('posts').add({
            title :title.value,
            content:content.value,
            subtitle:subtitle.value,
            createAt:new Date()
        })
    }
    return (
        <div className='create-post'>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label >Title</label>
                    <input {...title} ></input>
                </div>
                <div className='form-field'>
                    <label >Sub Title</label>
                    <input {...subtitle} ></input>
                </div>
                <div className='form-field'>
                    <label >Content</label>
                    <textarea {...content}></textarea>
                </div>
                <button className='create-post-btn'>Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;